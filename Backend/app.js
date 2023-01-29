require("dotenv").config();
require("express-async-errors");
const { StatusCodes } = require("http-status-codes");

const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const multer = require("multer");

const express = require("express");
const app = express();

//connectDB
const connectDB = require("./db/connect");

//middleware
app.use(express.static(`${__dirname}/public`));
const AdminForgotPasswordRouter = require("./routes/AdminForgotPasswordRouter");
const AdminLoginRouter = require("./routes/AdminLoginRouter");
const UserForgotPasswordRouter = require("./routes/UserForgotPasswordRouter");
const UserLoginRouter = require("./routes/UserLoginRouter");
const UserRegisterRouter = require("./routes/UserRegisterRouter");
const CanteenForgotPasswordRouter = require("./routes/CanteenForgotPasswordRouter");
const CanteenLoginRouter = require("./routes/CanteenLoginRouter");

app.use(express.json());
app.set("trust proxy", 1);
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);
app.use(helmet());
app.use(cors());
app.use(xss());

app.use("/api/v1/user/login", UserLoginRouter);
app.use("/api/v1/user/register", UserRegisterRouter);
app.use("/api/v1/user/forgotpassword", UserForgotPasswordRouter);

app.use("/api/v1/admin/login", AdminLoginRouter);

app.use("/api/v1/admin/forgotpassword", AdminForgotPasswordRouter);

app.use("/api/v1/canteen/login", CanteenLoginRouter);

app.use("/api/v1/canteen/forgotpassword", CanteenForgotPasswordRouter);

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
