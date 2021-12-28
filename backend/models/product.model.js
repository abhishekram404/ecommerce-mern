const mongoose = require("mongoose");

const categoriesList = require("../utils/categories");

const productSchema = mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  category: {
    type: [String],
    enum: categoriesList,
    default: categoriesList[0],
  },
  stock: { type: Number },
  tags: { type: [String] },
  description: { type: String },
  productImages: { type: [String] },
  rating: { type: Number, default: 0 },
  seller: {
    _id: { type: mongoose.Types.ObjectId },
    name: String,
    email: String,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
