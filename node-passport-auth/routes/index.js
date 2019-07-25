// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

var express = require("express");
var router = express.Router();
var auth = require("../controllers/AuthController.js");
var orderController = require("../controllers/OrderController.js");

// restrict index for logged in user only
router.get("/", auth.home);

// route to register page
router.get("/register", auth.register);

// route for register action
router.post("/register", auth.doRegister);

// route to login page
router.get("/login", auth.login);

// route for login action
router.post("/login", auth.doLogin);

// route for logout action
router.get("/logout", auth.logout);

// route for new order
router.get("/newOrder", orderController.newOrder);

// route for new order action
router.post("/newOrder", orderController.doNewOrder);

// route for viewing all orders
router.get("/allOrders", orderController.allOrders);

// route to view single order
router.get("/singleOrder", orderController.singleOrder);

// route to edit order
router.get("/editOrder", orderController.editOrder);

// route to send edit
router.post("/editOrder", orderController.doEditOrder);

// route to mark order as complete
router.post("/completeOrder", orderController.completeOrder);

module.exports = router;
