const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Plant = require("../models/Plant");

function capitalizeFirstWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

exports.getCheckoutSession = async (req, res, next) => {
  try {
    const plant = await Plant.findById(req.params.plant_id);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      success_url: `${req.protocol}://${req.get("host")}/`,
      cancel_url: `${req.protocol}://${req.get("host")}/plants/`,
      customer_email: req.user.email,
      client_reference_id: req.params.plant_id,
      line_items: [
        {
          name: capitalizeFirstWord(plant.name),
          //   description: null,
          //   images: [null],
          amount: plant.price * 100, // cents
          currency: "usd",
          quantity: 1,
        },
      ],
    });

    res.status(200).json({
      success: true,
      session,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
