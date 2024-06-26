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
      offer:Boolean,
      offerprice: Number,
      saving: Number,
      confirmedorder:{ type: Boolean, default: false },
      stocknumber: String,
      ponumber: String,

      masttype: String,
      mastsize: Number,

      closedheight: Number,
      freeliftheight: Number,

      valve: String,

      forks: Number,

      sideshift: String,
      forkpositioner: Boolean,

      tyre: String,

      controller: String,
      pincode: Boolean,
      liftybutton: Boolean,
      roller: String,
      displaywithcamera: Boolean,
      safetybluespot: Boolean,

      halolight: Boolean,
      precleaner: Boolean,
      upsweptexhaust: Boolean,
      heavydutyairfilter:Boolean,

      seat: String,
      cabin: String,

      coldstoreprot: Boolean,


      aircon: Boolean,
      heater: Boolean,
      reargrab: Boolean,
      sideleverhydraulic: Boolean,
      battery: String,
      charger: String,
      spare: String,

      sideextractionbattery: Boolean,
      armguard: Boolean,
      platform: Boolean,

      loadbackrest: Boolean,
      steering: Boolean,

      fork2d: String,
      bfs: Boolean,
      manualtrolley: Boolean,
      blinkey: Boolean,
      stabiliser: Boolean,

      order: { type: Boolean, default: false },
      specsheet: String,
    },
    { timestamps: true }
  )
);

exports.Quote = Quote;
