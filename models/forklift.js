const mongoose = require("mongoose");

const Forklift = mongoose.model(
  "Forklifts",
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
        engType: String,
        basePrice: Number
      }
    ]
  })
);

exports.Forklift = Forklift;
