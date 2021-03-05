var { validateUserUpdate } = require("../mongooseModels/model.users");

function validateUserUpdateMW(req, res, next) {
  console.log("In validate update user");

  let user = validateUserUpdate(req.body);
  // console.log(user);
  if (user.error) {
    let test = "";
    for (let i = 0; i < user.error.details.length; i++) {
      test = test + user.error.details[i].message;
      test = test + " ";
    }
    return res.status(400).send(test);
  }
  next();
}
module.exports = validateUserUpdateMW;
