const Product = require("../models/product.model");
const productValidate = require("../utils/productValidate");

module.exports.createProduct = async (req, res) => {
  try {
    const { value, error } = await productValidate(req.body);
    if (error) {
      return res.status(400).send({
        success: false,
        details: null,
        message: error.details[0].message,
      });
    }

    const product = await Product.create(value);
    return res.status(200).send({
      success: true,
      message: "Products created successfully.",
      details: product,
    });
  } catch (error) {
    return res
      .send({
        success: false,
        message: error.message,
        details: error,
      })
      .status(500);
  }
};

module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().lean();
    return res
      .send({
        success: true,
        message: "Products fetched successfully.",
        details: products,
      })
      .status(200);
  } catch (error) {
    return res
      .send({
        success: false,
        message: "Something went wrong while fetching the products.",
        details: error,
      })
      .status(500);
  }
};
