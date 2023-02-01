const express = require("express");
const app = express();
const User = require("./../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors/index");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const registerUser = async (req, res) => {
  const {
    email,
    name,
    password,
    enrolmentNo,
    collegeId,
    branchId,
    yearId,
    image,
  } = req.body;
  if (
    (!email, !name, !password, !enrolmentNo, !collegeId, !branchId, !yearId)
  ) {
    throw new BadRequestError("Please provide necessary credentials");
  }
  const user = await User.create(req.body);
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.name, id: user._id }, token });
};

const forgotPasswordUser = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new BadRequestError("Please provide email");
  }
  const otp = Math.floor(Math.random() * 9001 + 1000);
  console.log(otp);
  const user = await User.findOneAndUpdate(
    { email: email },
    { otp: otp },
    { new: true, runValidators: true }
  );
  if (!user) {
    throw new BadRequestError("Please provide valid email");
  }
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secureConnection: false,
    port: 587,
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: "hetpatel5542@gmail.com",
      pass: "xivslyvrfcrgewtb",
    },
  });

  const mailOptions = {
    from: "CVMU hetpatel5542@gmail.com",
    to: `${email}`,
    text: `Your OTP for reseting the password for User app is ${otp}, please enter this OTP in your User app to reset your password.
-Thanks,
Team CVMU  `,
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      return console.log(err);
    }
    res.status(StatusCodes.OK).json({ otpsent: true });
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide credentials");
  }
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: user.name, id: user_id }, token);
};

module.exports = {
  registerUser,
  forgotPasswordUser,
  loginUser,
};
