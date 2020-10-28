const express = require("express");
const passport = require("passport");

const plantController = require("../controllers/plantController");

const router = express.Router();

router
  .route("/")
  .post(
    passport.authenticate("jwt", { session: false }),
    plantController.addPlant
  )
  .get(plantController.getPlants);

router
  .route("/:plant_id")
  .get(plantController.getPlant)
  .patch(
    passport.authenticate("jwt", { session: false }),
    plantController.updatePlant
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    plantController.deletePlant
  );

router
  .route("/:plant_id/images")
  .post(
    passport.authenticate("jwt", { session: false }),
    plantController.uploadPlantImage
  );

router
  .route("/:id/images/:image_id")
  .delete(
    passport.authenticate("jwt", { session: false }),
    plantController.deletePlantImage
  );

router.route("/images/:image_name").get(plantController.getPlantImage);

module.exports = router;
