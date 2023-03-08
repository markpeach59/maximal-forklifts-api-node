const mongoose = require("mongoose");

const Quote = mongoose.model(
  "Quotes",
  new mongoose.Schema(
    {
      userid: mongoose.Schema.Types.ObjectId,
      model: String,
      powertrain: String,

      capacity: Number,
      engtype: String,
      baseprice: Number,
      imgname: String,
      markup: Number,
      price: Number,
      masttype: String,
      mastsize: Number,
      closedheight: Number,

      valve: String,

      forks: Number,

      sideshift: String,
      forkpositioner: Boolean,

      tyre: String,
      coldstoreprot: Boolean,
      seat: String,
      cabin: String,

      aircon: Boolean,
      heater: Boolean,
      reargrab: Boolean,
      sideleverhydraulic: Boolean,
      battery: String,
      charger: String,
      sideextractionbattery: Boolean,
      armguard: Boolean,
      platform: Boolean,

      loadbackrest: Boolean,
      steering: Boolean,

      fork2d: String,
      bfs: Boolean,
      manualtrolley: Boolean,
      blinkey: Boolean,
      order: { type: Boolean, default: false },
      specsheet: String,
    },
    { timestamps: true }
  )
);

exports.Quote = Quote;
