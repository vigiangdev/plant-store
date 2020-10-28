const multer = require("multer");
const fs = require("fs");
const path = require("path");
const mime = require("mime-types");

const Plant = require("../models/Plant");

const storage = multer.diskStorage({
  destination: `public/uploads/`,
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}-${Math.round(
        Math.random() * 1e9
      )}.${mime.extension(file.mimetype)}`
    );
  },
});

const upload = multer({
  storage,
}).single("plant");

exports.uploadPlantImage = async (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    } else {
      await Plant.findByIdAndUpdate(req.params.plant_id, {
        $push: {
          images: req.file,
        },
      });

      res.status(201).json({
        success: true,
        file: req.file,
      });
    }
  });
};

exports.getPlantImage = (req, res, next) => {
  if (!req.params.image_name) {
    req.params.image_name = "image-coming-soon-placeholder.png";
  }

  const imagePath = path.join(
    __dirname,
    "../public/uploads",
    req.params.image_name
  );

  if (fs.existsSync(imagePath)) {
    res.sendFile(imagePath);
  } else {
    res.sendFile("image-coming-soon-placeholder.png", {
      root: "public/uploads",
    });
  }
};

exports.deletePlantImage = async (req, res, next) => {
  try {
    const plant = await Plant.findById(req.params.plant_id);
    const image = plant.images.find(
      (el) => el._id.toString() === req.params.image_id
    );

    fs.unlink(image.path, (err) => {
      if (err) {
        res.status(400).json({
          success: false,
          message: err.message,
        });
      } else {
        const imageIndex = plant.images.findIndex(
          (image) => image._id.toString() === req.params.image_id
        );
        plant.images.splice(imageIndex, 1);
        plant.save();
      }
    });

    res.status(200).json({
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.addPlant = async (req, res, next) => {
  try {
    const plantInfo = {
      name: req.body.name,
      genus: req.body.genus,
      potSize: req.body.potSize,
      price: req.body.price,
      description: req.body.description,
      available: req.body.available,
    };

    const plant = await Plant.create(plantInfo);

    res.status(201).json({
      success: true,
      plant,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

exports.getPlants = async (req, res, next) => {
  try {
    console.log(req);
    const plants = await Plant.find(req.query);

    res.status(200).json({
      success: true,
      plants,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getPlant = async (req, res, next) => {
  try {
    const plant = await Plant.findById(req.params.plant_id);
    res.status(200).json({
      success: true,
      plant,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.deletePlant = async (req, res, next) => {
  try {
    await Plant.findByIdAndDelete(req.params.plant_id);
    res.status(204).json({
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updatePlant = async (req, res, next) => {
  try {
    const plant = await Plant.findByIdAndUpdate(req.params.plant_id, req.body, {
      new: true,
    });
    if (plant) {
      res.status(200).json({
        success: true,
        plant,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Plant not found.",
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
