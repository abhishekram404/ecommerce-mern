const Joi = require("joi");

const registerValidate = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).trim().required(),
    email: Joi.string().email().trim().required("An email is required."),
    password: Joi.string().min(6).trim().required(),
    repassword: Joi.ref("password"),
    employee: Joi.boolean(),
    agreed: Joi.boolean()
      .valid(true)
      .messages({
        "any.only": "You must agree to Shopy terms and conditions.",
      })
      .required(),
  });
  return schema.validate(data);
};

module.exports = registerValidate;
