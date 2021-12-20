const mongoose = require("mongoose");

const categoriesList = [
  "Uncategorized",
  "Food & drinks",
  "Electronics",
  "Beauty & cosmetics",
  "Kitchen",
  "Clothings",
  "Smartphones",
];

const productSchema = mongoose.Schema({
  name: { type: String },
  rate: { type: Number },
  category: {
    type: [String],
    enum: categoriesList,
    default: categoriesList[0],
  },
  quantity: { type: Number },
  tags: { type: [String] },
  description: { type: String },
  images: { type: [String] },
  rating: { type: Number, default: 0 },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
