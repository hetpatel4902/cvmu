const mongoose = require("mongoose");

const CollegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide College Name"],
  },
  image: {
    type: String,
    required: [true, "Please provide a college image"],
  },
});

module.exports = mongoose.model("College", CollegeSchema);
