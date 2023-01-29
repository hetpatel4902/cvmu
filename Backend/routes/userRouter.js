const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  forgotPasswordUser,
} = require("../controllers/User");

router.route("/").post(registerUser).post(loginUser).patch(forgotPasswordUser);

module.exports = router;
