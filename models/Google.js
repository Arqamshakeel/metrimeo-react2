var axios = require("axios");
const autoComplete = (query) =>
  new Promise((resolve, reject) => {
    let call =
      "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" +
      query +
      "&types=establishment&location=37.76999,-122.44696&radius=500&key=AIzaSyDjPv5UGF9ZLqfu7_VXjE57fQDjyADzvbM";
    axios
      .get(call)
      .then((res) => {
        resolve(res.data.predictions[0].place_id);
        getLatLng(res.data.predictions[0].place_id);
      })
      .catch((err) => {
        reject(err);
      });
  });
const getLatLng = (id) =>
  new Promise((resolve, reject) => {
    console.log("In get lang");
    let call =
      "https://maps.googleapis.com/maps/api/place/details/json?placeid=" +
      id +
      "&key=AIzaSyDjPv5UGF9ZLqfu7_VXjE57fQDjyADzvbM";

    axios
      .get(call)
      .then((res) => {
        console.log(res.data.result.geometry.location);
        resolve(res.data.result.geometry.location);
      })
      .catch((err) => {
        reject(err);
      });
  });

module.exports = { autoComplete };
