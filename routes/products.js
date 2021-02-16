var express = require("express");
const app = require("express")();
const http = require("http").createServer(app);
//const io = require("socket.io")(http);
var socketApi = require("../socketApi");
var io = socketApi.io;
var router = express.Router();
var { Product } = require("../mongooseModels/mongooseModel.product");
var { Order } = require("../mongooseModels/model.orders");
const { mongo } = require("mongoose");
var bcrypt = require("bcryptjs");
var config = require("config");
var _ = require("lodash");
var fs = require("fs");
var path = require("path");
var multer = require("multer");
//var upload = multer({ dest: "../uploads" });
var jwt = require("jsonwebtoken");
var validateUserRegMW = require("../middlewares/authUserReg");

router.get("/", async (req, res, next) => {
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let product = await Product.find().skip(skipRecords).limit(perPage);
  if (product.length == 0) return res.status(400).send([]);
  let total = await Product.countDocuments();
  // console.log(total);
  //var buf2 = Buffer.from(product[0].image.data, "base64");

  //var buf = buf2;

  //var imageSrc = "data:image/jpeg;base64," + `${buf.toString("base64")}`;
  //console.log(product[0].image.data.length);
  // var imageSrc = "data:image/jpeg;base64," + `${product[0].image.data}`;

  // for (let i = 0; i < product.length; i++) {
  //   product[i].image.data =
  //     "data:image/jpeg;base64," + `${product[0].image.data}`;
  //   product[i].image.data = ab2str(product[i].image.data);
  //   function ab2str(buf) {
  //     return String.fromCharCode.apply(null, new Uint16Array(buf));
  //   }
  // }
  //res.cookie("cookieNam", "cookieValue");

  return res.send({ product: product, total: total });

  // fs.writeFile("hello.jpg", buf, function (error) {
  //   if (error) {
  //     throw error;
  //   } else {
  //     console.log("File created from base64 string!");
  //     return true;
  //   }
  // });
  //return res.send("created");
});
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now() + ".jpg");
  },
});

var upload = multer({ storage: storage }).single("avatar");

router.post("/", upload, async (req, res, next) => {
  let product = new Product();
  product.name = req.body.name;
  product.stock = req.body.stock;
  if (product.stock < 0) product.stock = 0;
  product.company = req.body.company;
  product.price = req.body.price;
  if (product.price < 0) product.price = 0;
  product.weight = "30g";
  product.category = req.body.tags;
  product.expiry = req.body.expiry;
  console.log(__dirname);
  product.image.data = req.body.img;
  await product.save();
  res.send(product);
});
router.get("/cart", async function (req, res, next) {
  if (req.cookies.cart) {
    return res.send(req.cookies.cart);
  } else {
    return res.send(null);
  }
});
router.get("/orders", async function (req, res, next) {
  let order = await Order.find();
  //let date = new Date();
  if (order) return res.send(order);
  else return res.send(0);
});
router.delete("/orders/:id", async function (req, res, next) {
  // console.log("in del orders" + req.params.id);
  await Order.findByIdAndDelete(req.params.id);
  res.send();
});
router.get("/cart/:qty/:id", async function (req, res, next) {
  let id = req.params.id;
  console.log("Cart in id:" + id);
  let product = await Product.findById(id);
  if (req.params.qty > product.stock) {
    return res.status(400).send("qty>stock");
  }
  let cart = [];
  if (req.cookies.cart) {
    cart = req.cookies.cart;
  }
  console.log(cart.length);

  let check = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      console.log("matched");
      if (Number(cart[i].qty) + Number(req.params.qty) > product.stock) {
        console.log("greater");
        console.log(cart[i].qty);
        console.log(req.params.qty);
        console.log(product.stock);
        return res.status(400).send("qty>stock");
      }
    }
  }

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      check = 1;
      cart[i].qty = Number(cart[i].qty) + Number(req.params.qty);
    }
  }
  if (check != 1) {
    cart.push({
      id: product._id,
      name: product.name,
      company: product.company,
      price: product.price,
      qty: req.params.qty,
    });
  }
  res.cookie("cart", cart, { httpOnly: false });
  return res.send("Cookie created");
});

router.delete("/delete/:id", async function (req, res, next) {
  let id = req.params.id;
  let product = await Product.findById(id);
  if (!product) res.status(400).send("Item does not exists.");

  await Product.findByIdAndDelete(id);
  //product = await Product.find();
  //console.log("Delete in id:" + id);
  //await Product.save();
  res.send();
});

router.delete("/cart/:id", async function (req, res, next) {
  let id = req.params.id;
  console.log("Cart in id:" + id);

  if (!req.cookies.cart) res.status(400).send("Cart is empty.");
  let cart = [];
  cart = req.cookies.cart;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      console.log("found");
      cart.splice(i, 1);
      break;
    }
  }
  //req.cookies.cart = cart;

  res.cookie("cart", cart);

  // let product = await Product.findById(id);
  // // if(product)
  // //add check for counter and stock
  // let cart = [];
  // if (req.cookies.cart) {
  //   cart = req.cookies.cart;
  // }
  // cart.push({
  //   id: product._id,
  //   name: product.name,
  //   company: product.company,
  //   price: product.price,
  //   qty: req.params.qty,
  // });

  // res.cookie("cart", cart, { httpOnly: false });

  return res.send(cart);
});
router.post("/neworder", async (req, res) => {
  console.log(req.body.fname);
  console.log(req.body.lname);
  console.log(req.body.area);
  console.log(req.body.address1);
  console.log(req.body.address2);
  if (req.cookies.cart.length < 1) {
    return res.status(400).send("cartisempty");
  }
  console.log(req.cookies.cart);
  let cart = [];
  cart = req.cookies.cart;
  var data = {
    fname: req.body.fname,
    lname: req.body.lname,
    address: req.body.address1,
    phone: req.body.address2,
    area: req.body.area,
    cart,
  };

  cart.map(async (item, index) => {
    let product = await Product.findById(item.id);
    if (product) {
      product.stock = Number(product.stock) - Number(item.qty);
      if (product.stock < 0) {
        product.stock = 0;
      }
      await product.save();
    }
  });

  let order = new Order();
  order.customerData = data;
  order.cart = cart;
  //let date = new Date(req.body.date);
  //date.getTime();
  order.date = req.body.date;
  order.time = req.body.time;
  await order.save();

  cart = [];
  res.cookie("cart", cart);
  return res.send("order");
});

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    console.log(data);
    socket.broadcast.emit("client", data);
    return;
  });
});

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname + "-" + Date.now() + ".jpg");
//   },
// });

// var upload = multer({ storage: storage }).single("avatar");

// // router.post("/", upload.single("avatar"), function (req, res, next) {
// //   // req.file is the `avatar` file
// //   // req.body will hold the text fields, if there were any
// // });

// router.post("/", function (req, res) {
//   //console.log(req.file);
//   upload(req, res, function (err) {
//     if (err) {
//       res.json({
//         success: false,
//         message: "image not uploaded",
//       });
//       // A Multer error occurred when uploading.
//     } else if (err) {
//       res.json({
//         success: false,
//         message: "image not uploaded",
//       });
//       // An unknown error occurred when uploading.
//     }
//     return res.json({
//       success: true,
//       message: "image uploaded",
//     });
//     // Everything went fine.
//   });
// });
router.get("/single/:id", async (req, res, next) => {
  let id = req.params.id;
  let product = await Product.findById(id);
  return res.send(product);
});
router.get("/tags/:tag", async (req, res, next) => {
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let product = await Product.find({ category: req.params.tag })
    .skip(skipRecords)
    .limit(perPage);
  let total = await Product.find({ category: req.params.tag }).countDocuments();

  // });
  // console.log(product.length);
  if (product.length == 0) return res.status(400).send();

  return res.send({ product: product, total: total });
});
router.get("/expired", async (req, res, next) => {
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let recentDate = new Date();
  let date = recentDate.getDate();
  let month = recentDate.getMonth() + 1;
  let year = recentDate.getFullYear();
  console.log(date + "/" + month + "/" + year);
  console.log(recentDate);

  let product = await Product.find().select("expiry");
  let expired = [];
  product.map((item, index) => {
    let productExpiry = new Date(item.expiry);
    let pDate = productExpiry.getDate();
    let pMonth = productExpiry.getMonth() + 1;
    let pYear = productExpiry.getFullYear();
    console.log(pDate);
    console.log(pMonth);
    console.log(pYear);

    if (pYear === year) {
      if (pMonth === month || pMonth - 1 === month || month > pMonth) {
        expired.push(item._id);
      }
    }

    if (year > pYear) {
      expired.push(item._id);
    }
  });

  expired.map((item, index) => {
    console.log(item);
  });

  product = await Product.find().where("_id").in(expired).exec();

  // let total = await Product.find({ category: req.params.tag }).countDocuments();

  // });
  // console.log(product.length);
  if (product.length == 0) return res.status(400).send();

  //return res.send({ product: product, total: total });
  return res.send(product);
});
router.get("/singlename/:name", async (req, res, next) => {
  // let name = req.params.name;
  // console.log(name);
  // //console.log("dsfhnlksajfdjsaklfasdl;kfj;ksadjf;lasdjf");
  // let product = await Product.find({ name: req.params.name });
  // //console.log(product[0].image.data);
  // //if (!product) return res.status(400).send("Product Not found");
  // let img = product[0] ? product[0].image.data : null;
  // //let img = product[0].image.data ? product[0].image.data : null;
  // return res.send({ product: product, img: img });
  // //console.log("shshjhjsahsiwhldehidfheifh");
  // // res.send();

  //universal search
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let product = await Product.find({
    name: { $regex: req.params.name, $options: "i" },
  })
    .skip(skipRecords)
    .limit(perPage);

  let total = await Product.find({
    name: { $regex: req.params.name, $options: "i" },
  }).countDocuments();

  if (product.length == 0) return res.status(400).send();
  // product.map((item, index) => {
  //   console.log(item.name);
  // });
  return res.send({ product: product, total: total });
});
router.get("/outofstock", async (req, res, next) => {
  // let name = req.params.name;
  // console.log(name);
  // //console.log("dsfhnlksajfdjsaklfasdl;kfj;ksadjf;lasdjf");
  // let product = await Product.find({ name: req.params.name });
  // //console.log(product[0].image.data);
  // //if (!product) return res.status(400).send("Product Not found");
  // let img = product[0] ? product[0].image.data : null;
  // //let img = product[0].image.data ? product[0].image.data : null;
  // return res.send({ product: product, img: img });
  // //console.log("shshjhjsahsiwhldehidfheifh");
  // // res.send();

  //universal search
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let product = await Product.find({
    stock: 0,
  })
    .skip(skipRecords)
    .limit(perPage);

  let total = await Product.find({ stock: 0 }).countDocuments();

  if (product.length == 0) return res.status(400).send();
  // product.map((item, index) => {
  //   console.log(item.name);
  // });
  return res.send({ product: product, total: total });
});
router.get("/name", async (req, res, next) => {
  //let id = req.params.id;
  console.log("In name");
  let product = await Product.find().select("name -_id");
  //console.log("hellog");
  //console.log(product);
  return res.send(product);
  // return res.send(_.pick(product, ["name"]));
});
router.put("/put/:id", async (req, res, next) => {
  let id = req.params.id;
  //let product = await Product.findById(id);

  let product = await Product.findById(id);
  if (!product) res.status(400).send("product does not exists.");
  product.name = req.body.name;
  product.stock = req.body.stock;
  product.company = req.body.company;
  product.price = req.body.price;
  product.expiry = req.body.expiry;
  product.weight = "30g";
  product.category = req.body.tags;
  product.image.data = req.body.img;
  await product.save();
  return res.send();

  //return res.send("");
});
module.exports = router;
