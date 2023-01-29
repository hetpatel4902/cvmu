const mongoose = require("mongoose");

const SeatsSchema = new mongoose.Schema({
  branch: {
    type: String,
  },
  seats: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Seats", SeatsSchema);
