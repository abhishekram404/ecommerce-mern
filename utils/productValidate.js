const Joi = require("joi");

const productValidate = (data) => {
  const schema = Joi.object({
    name: Joi.string()
      .min(1)
      .max(100)
      .trim()
      .required("A product name is required."),
    price: Joi.number().required("Price is required for product."),
    category: Joi.string()
      .trim()
      .required("You must select a category for the product."),
    stock: Joi.number(),
    tags: Joi.array().items(Joi.string()),
    description: Joi.string().max(600).allow(null, "").trim(),
    productImages: Joi.array().items(Joi.string()),
  });
  return schema.validate(data);
};

module.exports = productValidate;
