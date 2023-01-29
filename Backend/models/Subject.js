const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SubjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide subject name"],
  },
  facultyId: {
    type: mongoose.Types.ObjectId,
    ref: "Faculty",
    required: [true, "Please provide Faculty"],
  },
  branchId: {
    type: mongoose.Types.ObjectId,
    ref: "Branch",
    required: [true, "Please provide Faculty"],
  },
  yearId: {
    type: mongoose.Types.ObjectId,
    ref: "Year",
    required: [true, "Please provide Faculty"],
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Subject", SubjectSchema);
