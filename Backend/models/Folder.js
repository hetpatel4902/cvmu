const mongoose = require("mongoose");

const FolderSchema = new mongoose.Schema({
  folderName: {
    type: String,
    required: [true, "Please provide folder name"],
  },
  studentId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide student id"],
  },
  yearId: {
    type: mongoose.Types.ObjectId,
    ref: "Year",
    required: "Please provide year",
  },
  branchId: {
    type: mongoose.Types.ObjectId,
    ref: "Branch",
    required: "Please provide branch",
  },
  collegeId: {
    type: mongoose.Types.ObjectId,
    ref: "College",
    required: "Please provide college",
  },
});

module.exports = mongoose.model("Folder", FolderSchema);
