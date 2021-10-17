const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String, select: false },
  products: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Customer" }],
  orders: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Order" }],
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
