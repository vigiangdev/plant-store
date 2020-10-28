const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const compression = require("compression");
const passport = require("passport");

const app = express();
require("dotenv").config;

if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

app.enable("trust proxy");
app.disable("x-powered_by");

app.use(cors());
app.options("*", cors());
app.use(helmet());
app.use(
  "/api",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5000,
  })
);
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.use(passport.initialize());
require("./config/passport")(passport);
app.use(compression());

const userRouter = require("./routes/userRouter");
const plantRouter = require("./routes/plantRouter");
const paymentRouter = require("./routes/paymentRouter");

app.use("/api/v1/users", userRouter);
app.use("/api/v1/plants", plantRouter);
app.use("/api/v1/payments", paymentRouter);

module.exports = app;
