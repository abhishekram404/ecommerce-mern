const Employee = require("../models/employee.model");
const Customer = require("../models/customer.model");
const registerValidate = require("../utils/registerValidate");
const bcrpyt = require("bcrypt");
const capitalize = require("capitalize");
const jwt = require("jsonwebtoken");

exports.all = async (req, res) => {
  console.log(req.session);
  res.send(req.session);
};

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
        role: "Employee",
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

exports.login = async (req, res) => {
  try {
    const isProduction = process.env.NODE_ENV === "production";
    const { email, password, remember } = await req.body;

    let found = await Employee.findOne({ email: email.trim() }).select(
      "+password"
    );

    if (!found) {
      found = await Customer.findOne({ email: email.trim() }).select(
        "+password"
      );
    }

    if (!found) {
      return res.status(400).send({
        success: false,
        data: null,
        message: "Email is not correct. Please check your email again. ",
      });
    }

    let role = await found.role;

    const isPasswordCorrect = await bcrpyt.compare(password, found.password);

    if (!isPasswordCorrect) {
      return res.status(400).send({
        success: false,
        data: null,
        message: "Password is incorrect.",
      });
    }

    const token = await jwt.sign(
      {
        _id: found._id,
        email: found.email,
      },
      process.env.JWT_SECRET || "SUPERSECRETJWTKEY",
      { expiresIn: "2d" }
    );
    res.cookie("r", role?.[0] || "C", {
      maxAge: 1000 * 60 * 60 * 48,
      secure: isProduction ? true : false,
      httpOnly: false,
      ...(isProduction && {
        domain: "abhishekram404-shopy.herokuapp.com",
        sameSite: "None",
      }),
    });

    res.cookie("isUserLoggedIn", true, {
      maxAge: 1000 * 60 * 60 * 48,
      secure: isProduction ? true : false,
      httpOnly: false,
      ...(isProduction && {
        domain: "abhishekram404-blog.herokuapp.com",
        sameSite: "None",
      }),
    });
    res.cookie("jwt", token, {
      maxAge: 1000 * 60 * 60 * 48,
      secure: isProduction ? true : false,
      httpOnly: true,
      ...(isProduction && {
        domain: "abhishekram404-blog.herokuapp.com",
        sameSite: "None",
      }),
    });

    return res.status(200).send({
      success: true,
      data: null,
      message: "Login successful.",
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

exports.logout = async (req, res) => {
  try {
    res.clearCookie("r");
    res.clearCookie("isUserLoggedIn");
    res.clearCookie("jwt");
    res.status(200).send({
      success: true,
      data: null,
      message: "Logged out",
    });
  } catch (error) {
    res.clearCookie("r");
    res.clearCookie("isUserLoggedIn");
    res.clearCookie("jwt");
    res.status(200).send({
      success: true,
      data: null,
      message: "Logged out",
    });
  }
};
