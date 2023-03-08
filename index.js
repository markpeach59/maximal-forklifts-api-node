const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();

require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);

require("./startup/db")();

if (!config.get("jwtPrivateKey")) {
  console.log("FATAL ERROR: Private Key is not defined");
  process.exit(1);
}
const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
