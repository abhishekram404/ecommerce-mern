const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: String,
  products: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Customer" }],
  orders: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Order" }],
  customerId: { type: String, unique: true, default: Date.now().toString(36) },
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
