const mongoose = require("mongoose");

const FilesSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: [true, "Please provide file name"],
  },
  fileUri: {
    type: String,
    required: [true, "Please provide file"],
  },
  folderId: {
    type: mongoose.Types.ObjectId,
    ref: "Folder",
    required: "Please provide folder",
  },
});

module.exports = mongoose.model("File", FilesSchema);
