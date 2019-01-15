global.__base = __dirname;
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const app = express();

const config = require(__base + "/app/config/config");

const auth = require(__base + "/app/routes/auth");
const home = require(__base + "/app/routes/home");
const party = require(__base + "/app/routes/parties");
const { checkToken } = require(__base + "/app/modules/common/jwt");

//middlewares
app.use(morgan("short"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "build")));

//All of the routes configured here
app.use("/auth", auth);
app.use("/home", checkToken, home);
app.use("/party", checkToken, party);

// For serving the react files.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// start listening to port
const server = app.listen(config.app.port, () => {
  console.log(`Node app started at: ${server.address().port}.`);
});

module.exports = server;
