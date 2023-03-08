const winston = require("winston");

require("express-async-errors");

module.exports = function() {
  winston.add(new winston.transports.File({ filename: "logfile.log" }));
};
