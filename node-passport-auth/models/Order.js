var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  product: String,
  quantity: { type: Number, min: 1 },
  dateEntered: Date,
  lastUpdated: Date,
  dateCompleted: Date,
  modifiedBy: String,
  orderNumber: Number
});

module.exports = mongoose.model("Order", OrderSchema);
