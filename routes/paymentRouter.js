const express = require("express");
const passport = require("passport");
const paymentController = require("../controllers/paymentController");

const router = express.Router();

router.get(
  "/checkout-session/:plant_id",
  passport.authenticate("jwt", { session: false }),
  paymentController.getCheckoutSession
);

module.exports = router;
