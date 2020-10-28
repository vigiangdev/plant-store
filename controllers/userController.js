const mongoose = require("mongoose");
const User = require("../models/User");

exports.getUser = async (req, res, next) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};
