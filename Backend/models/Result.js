const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  marks: {
    type: Number,
  },
  studentId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide student id"],
  },
  quizId: {
    type: mongoose.Types.ObjectId,
    ref: "Quiz",
    required: "Please provide Quiz id",
  },
});

module.exports = mongoose.model("Result", ResultSchema);
