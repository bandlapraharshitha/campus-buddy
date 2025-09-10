const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["student", "teacher"], required: true },
  course: { type: String },
  year: { type: String, enum: ["1st Year", "2nd Year", "3rd Year", "4th Year"] },
  department: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
