const mongoose = require("mongoose");

const BranchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide branch name"],
  },
  image: {
    type: String,
  },
  collegeId: {
    type: mongoose.Types.ObjectId,
    ref: "College",
    required: [true, "Please provide College name"],
  },
});

module.exports = mongoose.model("Branch", BranchSchema);
