const mongoose = require("mongoose");

const QuizQuestion = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "Please provide question"],
  },
  description: {
    type: String,
  },
  optiona: {
    type: String,
  },
  optionb: {
    type: String,
  },
  optionc: {
    type: String,
  },
  optiond: {
    type: String,
  },
  correctOption: {
    type: String,
  },
  image: {
    type: String,
  },
  studentAnswer: {
    type: String,
  },
  quizId: {
    type: mongoose.Types.ObjectId,
    ref: "Quiz",
    required: [true, "Please provide quiz"],
  },
});

module.exports = mongoose.model("QuizQuestion", QuizQuestion);
