const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function() {
  const db = config.get("db");
  winston.info(`Attempting to connect to MongoDB at: ${db}`);
  
  mongoose
    .set("useNewUrlParser", true)
    .set("useCreateIndex", true)
    .set("useUnifiedTopology", true)
    .connect(db)
    .then(() => winston.info(`Successfully connected to MongoDB at: ${db}`))
    .catch(err => {
      winston.error(`Failed to connect to MongoDB: ${err.message}`);
      process.exit(1);
    });
};
