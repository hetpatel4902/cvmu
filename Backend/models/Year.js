const mongoose = require("mongoose");

const YearSchema = new mongoose.Schema({
  name: {
    type: Number,
    required: [true, "Please provide year name"],
  },
  collegeId: {
    type: mongoose.Types.ObjectId,
    required: [true, "Please provide college name"],
    ref: "College",
  },
  branchId: {
    type: mongoose.Types.ObjectId,
    ref: "Branch",
    required: [true, "please provide branch"],
  },
});

module.exports = mongoose.model("Year", YearSchema);
