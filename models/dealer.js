const mongoose = require("mongoose");

const dealerSchema = new mongoose.Schema({
  dealername: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 255
  },
  dealerregion: {
    type: String,

    trim: true,
    minlength: 3,
    maxlength: 255
  },
  dealerlogo: {
    type: String,

    trim: true,
    minlength: 3,
    maxlength: 255
  }
});

const Dealer = mongoose.model("Dealers", dealerSchema);

exports.Dealer = Dealer;
