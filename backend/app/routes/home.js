"use strict";
const { checkToken } = require(__base + "/app/modules/common/jwt");
const home = require(__base + "/app/handlers/home");

const express = require("express");
const router = express.Router();

router.get("/", checkToken, home.displayhome);

module.exports = router;
