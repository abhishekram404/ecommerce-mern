const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: { type: String, select: false },
  role: { type: String, enum: ["Admin", "Employee"] },
});
const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
