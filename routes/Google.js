var express = require("express");
const { autoComplete } = require("../models/Google");
var router = express.Router();

// var autocomplete = require("../models/Google");
/* GET home page. */
router.get("/", async function (req, res, next) {
  let predictions = await autoComplete("c2 wapda town");
  console.log(predictions.length);
  console.log(predictions);
  return res.status(200).send(predictions);
});
router.get("/autocomplete", async function (req, res, next) {
  //   let predictions = await autoComplete("c2 wapda town");
  //   console.log(predictions.length);
  //   console.log(predictions);
  //   return res.status(200).send(predictions);
  console.log(req.query);
  res.send();
});

module.exports = router;
