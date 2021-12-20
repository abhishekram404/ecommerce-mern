const Joi = require("joi");

const productValidate = (data) => {
  const schema = Joi.object({
    name: Joi.string()
      .min(1)
      .max(100)
      .trim()
      .required("A product name is required."),
    rate: Joi.number().required("Price is required for product."),
    category: Joi.array()
      .items(Joi.string().trim())
      .required("You must select at least one category for the product."),
    quantity: Joi.number(),
    tags: Joi.array().items(Joi.string()),
    description: Joi.string().max(600).trim(),
    images: Joi.array().items(Joi.string()),

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
