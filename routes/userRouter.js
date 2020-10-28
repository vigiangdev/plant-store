const express = require("express");
const passport = require("passport");

const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  userController.getUser
);

module.exports = router;
