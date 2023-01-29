const mongoose = require("mongoose");

const ChoicesSchema = new mongoose.Schema({
  p1: {
    type: String,
    required: [true, "Please provide Priority1"],
  },
  p2: {
    type: String,
    required: [true, "Please provide Priority2"],
  },
  p3: {
    type: String,
    required: [true, "Please provide Priority3"],
  },
  allot: {
    type: String,
  },
  spi: {
    type: Number,
    required: [true, "Please provide cpi"],
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide student id"],
  },
});

module.exports = mongoose.model("Choices", ChoicesSchema);
