const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide quiz name"],
  },
  instructions: {
    type: String,
  },
  totalQuestions: {
    type: Number,
    required: [true, "Please provide total number of questions"],
  },
  marksPerQuestion: {
    type: Number,
    default: 1,
  },
  facultyId: {
    type: mongoose.Types.ObjectId,
    ref: "Faculty",
    required: [true, "Please provide faculty id"],
  },
  collegeId: {
    type: mongoose.Types.ObjectId,
    ref: "College",
    required: [true, "Please provide College"],
  },
  branchId: {
    type: mongoose.Types.ObjectId,
    ref: "Branch",
    required: [true, "Please provide branch"],
  },
  yearId: {
    type: mongoose.Types.ObjectId,
    ref: "Year",
    required: [true, "Please provide current year"],
  },
});

module.exports = mongoose.model("Quiz", QuizSchema);
