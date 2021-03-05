var express = require("express");
var router = express.Router();
var { User } = require("../mongooseModels/model.users");
const { mongo } = require("mongoose");
var bcrypt = require("bcryptjs");
var config = require("config");
var generator = require("generate-password");
var _ = require("lodash");
const nodemailer = require("nodemailer");
var jwt = require("jsonwebtoken");
var validateUserRegMW = require("../middlewares/authUserReg");
var validateUserLoginMW = require("../middlewares/authUserLog");
router.get("/", async (req, res, next) => {
  let user = await User.find();

  res.send(user[0]._id);
});

router.post("/register", validateUserRegMW, async (req, res) => {
  let newuser = await User.findOne({ email: req.body.email });
  if (newuser != null)
    return res.status(400).send("Sorry, user already exists.");
  newuser = new User();
  newuser.fname = req.body.fname;
  newuser.lname = req.body.lname;
  newuser.email = req.body.email;
  newuser.password = req.body.password;
  let salt = await bcrypt.genSalt(10);
  newuser.password = await bcrypt.hash(newuser.password, salt);
  await newuser.save();
  return res.send();
  // return res.send(_.pick(user, ["email", "name"]));
});

router.post("/login", validateUserLoginMW, async (req, res) => {
  let userData = await User.findOne({
    email: req.body.email,
  });
  if (!userData)
    return res.status(400).send("Sorry, user with this email not found.");

  let password = await bcrypt.compare(req.body.password, userData.password);
  if (!password) return res.status(400).send("Wrong password");
  console.log(userData.fname);

  let token = jwt.sign(
    {
      _id: userData._id,
      name: userData.fname,
      role: userData.role,
      email: userData.email,
    },
    config.get("jwt")
  );

  let user2 = jwt.verify(token, config.get("jwt"));
  return res.send({ ok: "login successfull", token, user2 });
});

router.post("/forgetPassword/:emaill", async (req, res) => {
  // console.log(req.params.id);
  console.log(req.params.emaill + "hello");
  let user = await User.findOne({ email: req.params.emaill });
  if (!user)
    return res.status(400).send("Sorry no account found with this email.");
  console.log(user);
  let id = user._id;
  // let user = await User.findById(req.params.id);
  // if (!user) res.status(400).send("User does not exists!");

  var password = generator.generate({
    length: 10,
    numbers: true,
  });

  user.password_reset_code = password;

  console.log(password);

  console.log(req.params.emaill);
  console.log("AT SENDING....");

  // await user.sendPasswordResetEmail(password, req.params.emaill, user);
  // await user.save();
  // await sendConfirmationMail(req.params.emaill, password, id);
  await sendConfirmationMail(req.params.emaill, password, id);
  await user.save();
  // await sendMail(req.body.email, password);
  return res.status(200).send();
});

async function sendConfirmationMail(r_email, key, id) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "arqam.android@gmail.com",
      pass: "aafhbvtocfltptkm",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "trakouts@gmail.com", // sender address
    to: r_email, // list of receivers
    subject: "Recovery for trakouts login passoword", // Subject line
    text: `Hello ${r_email}, Your new trakouts password is `, // plain text body
    html: `<div><p>Ignore this email if you have not applied for password recovery for trakouts.</p><b><a href=http://localhost:3000/newpassword/${id}/${key}>Click this link to confirm and to Redirect to a new page</a></b></div>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

router.get("/getNewPassword/:id/:key", async (req, res) => {
  console.log(req.params.id);
  console.log(req.params.key);
  let key = req.params.key;
  let user = await User.findById(req.params.id);
  if (!user) return res.status(400).send("user not found!");
  var new_password = "";

  console.log(user.password_reset_code);
  if (user.password_reset_code == key) {
    // new_password = generator.generate({
    //   length: 10,
    //   numbers: true,
    // });
    // user.password = new_password;
    // let salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(new_password, salt);
    // await user.save();
    return res.status(200).send("valid");
  } else {
    return res.status(400).send("Invalid Link! cant reset password");
  }
  // console.log("YESSSS");
});
router.post("/updatepassword/:id/:key", async (req, res) => {
  // console.log(req.params.password);
  // console.log(req.params.key);
  console.log(req.body);
  let key = req.params.key;
  let user = await User.findById(req.params.id);
  if (!user) return res.status(400).send("user not found!");
  // var new_password = "";

  // console.log(user.password_reset_code);
  if (user.password_reset_code == key) {
    // new_password = generator.generate({
    //   length: 10,
    //   numbers: true,
    // });
    // newuser.password = req.body.password;

    let salt = await bcrypt.genSalt(10);
    let newpass = await bcrypt.hash(req.body.newPassword, salt);
    user.password = newpass;
    // let salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(new_password, salt);
    await user.save();
    return res.status(200).send("Password updated");
  } else {
    return res.status(400).send("Invalid Link! cant reset password");
  }
  // console.log("YESSSS");
  // return res.status(400).send("Invalid Link! cant reset password");
});
module.exports = router;
