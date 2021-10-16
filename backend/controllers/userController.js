const Employee = require("../models/employee.model");
const Customer = require("../models/customer.model");
const registerValidate = require("../utils/registerValidate");
const bcrpyt = require("bcrypt");
const capitalize = require("capitalize");

exports.register = async (req, res) => {
  try {
    const { error } = await registerValidate(req.body);
    if (error) {
      return res.status(400).send({
        success: false,
        data: null,
        message: error.details[0].message,
      });
    }
    const { name, email, password, employee } = await req.body;

    const doesEmployeeExist = await Employee.findOne({ email });
    const doesCustomerExist = await Customer.findOne({ email });

    if (doesCustomerExist || doesEmployeeExist) {
      return res.status(400).send({
        success: false,
        data: null,
        message: "Email already exists. Please login",
      });
    }

    const hashedPassword = await bcrpyt.hash(password.trim(), 10);

    if (employee) {
      await Employee.create({
        name: capitalize.words(name.trim()),
        email: email.trim(),
        password: hashedPassword,
        role: "Admin",
      });

      return res.status(200).send({
        success: true,
        data: null,
        message: "Registration successful. Please login",
      });
    }

    // else register as a customer
    await Customer.create({
      name: capitalize.words(name.trim()),
      email: email.trim(),
      password: hashedPassword,
    });
    return res.status(200).send({
      success: true,
      data: null,
      message: "Registration successful. Please login",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      success: false,
      data: error,
      message: error.message,
    });
  }
};
