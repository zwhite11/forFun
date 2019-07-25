var mongoose = require("mongoose");
var passport = require("passport");
var Order = require("../models/Order");

var orderController = {};

let checkUser = function(req, res) {
  if (!req.user) {
    res.render("login");
  }
};

// go to new order page
orderController.newOrder = function(req, res) {
  checkUser(req, res);
  res.render("newOrder", { user: req.user });
};
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/node-auth", {
  useNewUrlParser: true,
  useFindAndModify: false
});

var totalOrders = -1;
Order.countDocuments({}, function(err, count) {
  totalOrders = count;
});

// post new order
orderController.doNewOrder = function(req, res) {
  let newOrder = new Order({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.emailAddress,
    product: req.body.productName,
    quantity: req.body.quantity,
    dateEntered: new Date(),
    lastUpdated: new Date(),
    dateCompleted: null,
    modifiedBy: req.session.passport.user,
    orderNumber: totalOrders + 1
  });
  newOrder.save((error, results) => {
    if (error) {
      console.log(error);
      return next(error);
    }
    console.log("added new order - number" + totalOrders);
  });
  res.redirect("/allOrders");
};

// go to all order page
orderController.allOrders = function(req, res) {
  checkUser(req, res);
  let result = Order.find({}, function(err, orders) {
    // console.log("all orders", orders);
    // console.log("reqqqq", req);
    res.render("allOrders", { user: req.user, orders: orders });
  });
};

// show single order
orderController.singleOrder = function(req, res) {
  checkUser(req, res);
  let result = Order.find({ orderNumber: req.query.orderNumber }, function(
    error,
    order
  ) {
    console.log("order:", order);
    res.render("singleOrder", { user: req.user, order: order[0] });
  });
};

// edit order
orderController.editOrder = function(req, res) {
  checkUser(req, res);
  console.log("orderNumber = ", req.query.orderNumber);
  let result = Order.find({ orderNumber: req.query.orderNumber }, function(
    error,
    order
  ) {
    console.log("order:", order);
    res.render("editOrder", { user: req.user, order: order[0] });
  });
};

// post edit order
orderController.doEditOrder = function(req, res) {
  checkUser(req, res);
  console.log("Editing order number ----------- ", req.body.orderNumber);
  let result = Order.findOne({ orderNumber: req.body.orderNumber }, function(
    error,
    order
  ) {
    order.firstName = req.body.firstName;
    order.lastName = req.body.lastName;
    order.email = req.body.emailAddress;
    order.product = req.body.productName;
    order.quantity = req.body.quantity;
    order.lastUpdated = new Date();
    order.modifiedBy = req.session.passport.user;
    order.save();
    console.log("order edited:", order);
  });
  res.redirect("/allOrders");
};

// mark order as completed
orderController.completeOrder = function(req, res) {
  checkUser(req, res);
  console.log("marking order complete: ", req.body.orderNumber);
  let result = Order.findOne({ orderNumber: req.body.orderNumber }, function(
    error,
    order
  ) {
    order.lastUpdated = new Date();
    order.dateCompleted = new Date();
    order.save();
  });
  res.redirect("/allOrders");
};

module.exports = orderController;
