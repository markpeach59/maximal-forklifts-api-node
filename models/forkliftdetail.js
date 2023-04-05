const { string } = require("joi");
const mongoose = require("mongoose");

const Forkliftdetail = mongoose.model(
  "Forkliftdetails",
  new mongoose.Schema({
    model: String,
    powertrain: String,
    capacity: Number,
    engType: String,
    basePrice: Number,

    imgName: String,
    modeldescription :[{description:String}],
    engines: [{ enginetype: String, price: Number }],
 
    loadcenter : Number,

    masts: [
      {
        masttype: String,
        mastsizes: [
          {
            mastlength: Number,
            closedheight: Number,
            freeliftheight: Number,
            price: Number,
          },
        ],
      },
    ],
    forks: [{ forklength: Number, price: Number }],
    forks2d: [{ forklength: String, price: Number }],
    valves: [{ valvetype: String, price: Number }],

    defaulttyre: String,
    tyres: [{ tyretype: String, price: Number }],

    sideshift: [{ sideshifttype: String, price: Number }],
    forkpositioner: [{ forkpositionertype: String, price: Number }],
    coldstoreprot: [{ coldstoreprottype: String, price: Number }],
    reargrab: [{ reargrabtype: String, price: Number }],

    sideleverhydraulic: [{ sideleverhydraulictype: String, price: Number }],

    platform: [{ platformtype: String, price: Number }],
    armguard: [{ armguardtype: String, price: Number }],

    pincode: [{ pincodetype: String, price: Number }],

    seatrequired: {type:Boolean, default:'false'},
    seat: [{ seattype: String, price: Number }],
    cabin: [{ cabinoption: String, price: Number }],
    heater: [{ heatertype: String, price: Number }],
    aircon: [{ aircontype: String, price: Number }],
    loadbackrest: [{ loadbackresttype: String, price: Number }],
    steering: [{ steeringype: String, price: Number }],

    defaultbattery: String,
    defaultcharger:  String,

    batteries: [
      {
        batterytype: String,
        price: Number,
        chargers: [
          {
            chargertype: String,
            price: Number,
          },
        ],
      },
    ],
    
    

    safetybluespot: [{  safetybluespottype: String, price: Number }],
    bfs: [{ bfstype: String, price: Number }],
    trolley: [{ trolleytype: String, price: Number }],
    blinkey: [{ blinkeytype: String, price: Number }],

    sideextractionbattery: [
      { sideextractionbatterytype: String, price: Number },
    ],
    specsheet: String,
  })
);

exports.Forkliftdetail = Forkliftdetail;
