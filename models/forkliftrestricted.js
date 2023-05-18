const mongoose = require("mongoose");

const Forkliftrestricted = mongoose.model(
  "RestrictedForklifts",
  new mongoose.Schema({
    range: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 255
    },
    models: [
      {
        model: String,
        capacity: Number,
        engType: String
      }
    ]
  })
);

exports.Forkliftrestricted = Forkliftrestricted;