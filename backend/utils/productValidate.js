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
    description: Joi.string().max(600).trim(),
    productImages: Joi.array().items(Joi.string()),

    // trags: Joi.boolean()
    //   .valid(true)
    //   .messages({
    //     "any.only": "You must agree to Shopy terms and conditions.",
    //   })
    //   .required(),
  });
  return schema.validate(data);
};

module.exports = productValidate;
