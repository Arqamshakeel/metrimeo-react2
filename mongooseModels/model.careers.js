var mongoose = require("mongoose");
const Joi = require("@hapi/joi"); //for validating data in mongoose

var careerSchema = mongoose.Schema({
  resume: {},
  coverLetter: {},
  careers: {},
});
var Career = mongoose.model("careers", careerSchema);

module.exports.Career = Career;
