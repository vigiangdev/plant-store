const jwt = require("jsonwebtoken");
const User = require("../models/User");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
  user.password = undefined;

  res.status(statusCode).json({
    success: true,
    token: `Bearer ${token}`,
    user,
  });
};

exports.register = async (req, res, next) => {
  try {
    const userInfo = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    };
    const user = await User.create(userInfo);
    createSendToken(user, 201, req, res);
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );
    if (user.comparePassword(req.body.password, user.password)) {
      createSendToken(user, 200, req, res);
    } else {
      res.status(401).json({
        success: false,
        message: "Email or password incorrect.",
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
