var mongoose = require("mongoose");
const Joi = require("@hapi/joi"); //for validating data in mongoose

var userSchema = mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  username: String,
  password_reset_code: String,
  password: String,
  role: String,
  img: String,

  type: String,
  phone: String,
  country: String,
});
var User = mongoose.model("users", userSchema);

function validateUser(data) {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    email: Joi.string().email().min(3).required(),
    phone: Joi.string().required(),
    country: Joi.string().required(),
    fname: Joi.string().min(3).required(),
    // lname: Joi.string().min(3).required(),

    password: Joi.string().min(4).required(),
    type: Joi.string().min(1).required(),
  });
  return schema.validate(data, { abortEarly: true });
}
function validateUserUpdate(data) {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    email: Joi.string().email().min(3).required(),
    phone: Joi.string().required(),

    fname: Joi.string().min(3).required(),
    img: Joi.string().min(1),
    // lname: Joi.string().min(3).required(),
  });
  return schema.validate(data, { abortEarly: true });
}
function validateUserLogin(data) {
  const schema = Joi.object({
    email: Joi.string().email().min(3).required(),
    password: Joi.required(),
  });
  return schema.validate(data, { abortEarly: false });
}

module.exports.User = User;
module.exports.validateUser = validateUser;
module.exports.validateUserLogin = validateUserLogin;
module.exports.validateUserUpdate = validateUserUpdate;
