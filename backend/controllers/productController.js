const Employee = require("../models/employee.model");
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
    let seller = await Employee.findById(await req.authorizedUser._id).lean();

    const product = await Product.create({
      ...value,
      seller: {
        _id: seller._id,
        name: seller.name,
        email: seller.email,
      },
    });

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

module.exports.getAllCategories = async (req, res) => {
  try {
    const categoriesList = await require("../utils/categories");
    res.send({
      success: true,
      message: "Categories fetched successfully.",
      details: categoriesList,
    });
  } catch (error) {
    await res.send({
      success: false,
      message: error.message,
      details: error,
    });
  }
};
