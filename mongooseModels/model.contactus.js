var mongoose = require("mongoose");
const Joi = require("@hapi/joi"); //for validating data in mongoose

var contactusSchema = mongoose.Schema({
  message: {},
});

var Contact = mongoose.model("contactsus", contactusSchema);

module.exports.Contact = Contact;
