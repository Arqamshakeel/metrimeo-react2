var express = require("express");
var router = express.Router();
var { User } = require("../mongooseModels/model.users");
var { Career } = require("../mongooseModels/model.careers");
var { Contact } = require("../mongooseModels/model.contactus");
const { mongo } = require("mongoose");
var bcrypt = require("bcryptjs");
var config = require("config");
var generator = require("generate-password");
var _ = require("lodash");
const nodemailer = require("nodemailer");
var jwt = require("jsonwebtoken");
var validateUserRegMW = require("../middlewares/authUserReg");
var validateUserLoginMW = require("../middlewares/authUserLog");
var validateUserUpdateMW = require("../middlewares/authUserUpdate");
router.get("/", async (req, res, next) => {
  let user = await User.find();

  res.send(user[0]._id);
});
router.get("/getall", async (req, res, next) => {
  let user = await User.find();

  res.send(user);
});
router.post("/updateUserRole", async (req, res, next) => {
  console.log(req.body._id);
  let user = await User.findById(req.body._id);
  if (!user) return res.status(400).send("Sorry, user not found.");

  if (user.role != req.body.role) {
    user.role = req.body.role;
  }
  await user.save();
  return res.status(200).send();
});

router.post("/register", validateUserRegMW, async (req, res) => {
  let newuser = await User.findOne({ email: req.body.email });
  if (newuser != null)
    return res.status(400).send("Sorry, user with this email already exists.");

  // newuser = await User.findOne({ username: req.body.username });
  // if (newuser != null)
  //   return res.status(400).send("Sorry, username already exists.");
  newuser = new User();
  console.log(req.body.type2);
  newuser.fname = req.body.fname;

  newuser.email = req.body.email;
  // newuser.username = req.body.username;

  newuser.password = req.body.password;
  newuser.type = req.body.type;
  newuser.phone = req.body.phone;
  newuser.country = req.body.country;

  let salt = await bcrypt.genSalt(10);
  newuser.password = await bcrypt.hash(newuser.password, salt);
  await newuser.save();
  return res.send();
  // return res.send(_.pick(user, ["email", "name"]));
});
router.post("/update/:id", validateUserUpdateMW, async (req, res) => {
  let newuser = await User.findById(req.params.id);
  if (!newuser) return res.status(400).send("Sorry, user not found.");
  let tempusername = newuser.username;
  newuser = await User.findOne({ username: req.body.username });
  if (req.body.username == tempusername) {
  } else {
    if (newuser != null)
      return res.status(400).send("Sorry, username already exists.");
  }

  newuser = await User.findById(req.params.id);
  if (!newuser) return res.status(400).send("Sorry, user not found.");

  newuser.fname = req.body.fname;

  newuser.email = req.body.email;
  newuser.username = req.body.username;

  newuser.phone = req.body.phone;
  if (req.body.img.length > 40) {
    newuser.img = req.body.img;
  }

  await newuser.save();
  return res.send();
  // return res.send(_.pick(user, ["email", "name"]));
});
router.get("/getimage/:id", async (req, res) => {
  let newuser = await User.findById(req.params.id);
  if (!newuser) return res.status(400).send("Sorry, user not found.");

  return res.send(newuser.img);
  // return res.send(_.pick(user, ["email", "name"]));
});
router.post("/uploadcareersdata", async (req, res) => {
  // let newuser = await User.findById(req.params.id);
  // if (!newuser) return res.status(400).send("Sorry, user not found.");
  let newuser = new Career();
  let admins = await User.find({ role: true }).select("email -_id");

  // console.log(adminsEmails);
  let adminsEmails = [];
  for (let i = 0; i < admins.length; i++) {
    adminsEmails.push(admins[i].email);
  }

  newuser.resume = req.body.resume;
  newuser.coverLetter = req.body.coverLetter;

  console.log(req.body.fname);
  let obj = {
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    phone: req.body.phone,
    city: req.body.city,
    country: req.body.country,
    allowedToWork: req.body.allowedToWork,
    education: req.body.education,
    interests: req.body.interests,
  };
  newuser.careers = obj;

  await newuser.save();
  let data2 = `Career form Filled`;
  let data = `You a new ${data2} from Metrimeo`;
  await sendTriggerMail(adminsEmails, data);
  return res.send();
});
// router.post("/uploadcareersdata/:id", async (req, res) => {
//   let newuser = await User.findById(req.params.id);
//   if (!newuser) return res.status(400).send("Sorry, user not found.");

//   let admins = await User.find({ role: true }).select("email -_id");

//   // console.log(adminsEmails);
//   let adminsEmails = [];
//   for (let i = 0; i < admins.length; i++) {
//     adminsEmails.push(admins[i].email);
//   }

//   newuser.resume = req.body.resume;
//   newuser.coverLetter = req.body.coverLetter;

//   console.log(req.body.fname);
//   let obj = {
//     fname: req.body.fname,
//     lname: req.body.lname,
//     email: req.body.email,
//     phone: req.body.phone,
//     city: req.body.city,
//     country: req.body.country,
//     allowedToWork: req.body.allowedToWork,
//     education: req.body.education,
//     interests: req.body.interests,
//   };
//   newuser.careers = obj;

//   await newuser.save();
//   let data2 = `Career form Filled`;
//   let data = `You a new ${data2} from ${newuser.fname} from Metrimeo`;
//   await sendTriggerMail(adminsEmails, data);

//   return res.send();
// });
router.post("/contactus/", async (req, res) => {
  // let newuser = await User.findById(req.params.id);
  // if (!newuser) return res.status(400).send("Sorry, user not found.");

  let newuser = new Contact();

  let admins = await User.find({ role: true }).select("email -_id");

  // console.log(adminsEmails);
  let adminsEmails = [];
  for (let i = 0; i < admins.length; i++) {
    adminsEmails.push(admins[i].email);
  }
  console.log(adminsEmails);
  let obj = {
    fname: req.body.fname,
    email: req.body.email,
    phone: req.body.phone,
    typeAccount: req.body.typeAccount,
    message: req.body.message,
    subject: req.body.subject,
  };
  newuser.message = obj;

  let data2 = `message`;
  let data = `You a new ${data2} from Metrimeo`;
  await newuser.save();
  await sendTriggerMail(adminsEmails, data);

  return res.send();
});
async function sendTriggerMail(adminsEmails, data) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "metrimeocredit@gmail.com",
      pass: "metrimeofiverr",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "trakouts@gmail.com", // sender address
    to: adminsEmails, // list of receivers
    subject: data, // Subject line
    text: data, // plain text body
    html: `<div>${data}</div>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
router.get("/getcareersdata/all", async (req, res) => {
  let career = await Career.find();
  if (!career) return res.status(400).send("Sorry, user not found.");

  // await newuser.save();
  return res.send(career);
});
router.get("/getcontactus", async (req, res) => {
  let career = await Contact.find();
  if (!career) return res.status(400).send("Sorry, user not found.");

  return res.status(200).send(career);
});
router.get("/getcareersdata/:id", async (req, res) => {
  let newuser = await User.findById(req.params.id);
  if (!newuser) return res.status(400).send("Sorry, user not found.");

  // await newuser.save();
  return res.send(newuser.resume);
});

router.post("/updatepassword/:id", async (req, res) => {
  let newuser = await User.findById(req.params.id);
  if (!newuser) return res.status(400).send("Sorry, user not found.");

  let password = await bcrypt.compare(
    req.body.currentPassword,
    newuser.password
  );
  if (!password) return res.status(400).send("Wrong current password.");

  let salt = await bcrypt.genSalt(10);
  newuser.password = await bcrypt.hash(req.body.password, salt);
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
      phone: userData.phone,
      username: userData.username,
      // img: userData.img,
    },
    "SomeKey"
  );

  let user2 = jwt.verify(token, "SomeKey");
  return res.send({ ok: "login successfull", token, user2 });
});

router.post("/forgetPassword/:emaill", async (req, res) => {
  // console.log(req.params.id);
  console.log(req.params.emaill + "hello");
  let user = await User.findOne({ email: req.params.emaill });
  if (!user)
    return res.status(400).send("Sorry no account found with this email.");
  // console.log(user);
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
      user: "metrimeocredit@gmail.com",
      pass: "metrimeofiverr",
    },
    // auth: {
    //   user: "arqam.android@gmail.com",
    //   pass: "aafhbvtocfltptkm",
    // },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "trakouts@gmail.com", // sender address
    to: r_email, // list of receivers
    subject: "Recovery for trakouts login passoword", // Subject line
    text: `Hello ${r_email}, Your new trakouts password is `, // plain text body
    html: `<div><p>Ignore this email if you have not applied for password recovery for trakouts.</p><b><a href=https://metrimeo-react.herokuapp.com/newpassword/${id}/${key}>Click this link to confirm and to Redirect to a new page</a></b></div>`, // html body
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
