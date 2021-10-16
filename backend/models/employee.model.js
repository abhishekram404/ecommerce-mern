const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: { type: String, select: false },
  role: { type: String, enum: ["Admin", "Employee"] },
  employeeId: { type: String, unique: true, default: Date.now().toString(36) },
});
const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
