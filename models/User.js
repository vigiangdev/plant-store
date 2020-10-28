const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: validator.isEmail,
      message: "Email is not valid.",
    },
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
    select: false,
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters."],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: true,
    validate: {
      validator: function (pw) {
        return pw === this.password;
      },
      message: "Passwords do not match.",
    },
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.comparePassword = async (
  plainTextPassword,
  hashedPassword
) => {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
