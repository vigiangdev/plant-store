const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  fieldname: String,
  originalname: String,
  encoding: String,
  mimetype: String,
  destination: String,
  filename: String,
  path: String,
  size: Number,
});

const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  genus: {
    type: String,
  },
  nickname: {
    type: String,
  },
  potSize: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  available: {
    type: Number,
    min: [0, "Must be greater than or equal to 0."],
  },
  images: [imageSchema],
});

const Plant = mongoose.model("Plant", plantSchema);
module.exports = Plant;
