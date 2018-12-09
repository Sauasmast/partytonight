global.__base = __dirname;
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

const config = require(__base + "/app/config/config");

const auth = require(__base + "/app/routes/auth");
const home = require(__base + "/app/routes/home");

//middlewares
app.use(morgan("short"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//All of the routes configured here
app.use("/auth", auth);
app.use("/home", home);

// start listening to port
const server = app.listen(config.app.port, () => {
  console.log(`Node app started at: ${server.address().port}.`);
});

module.exports = server;
