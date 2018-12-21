"use strict";
const home = require(__base + "/app/handlers/home");

const express = require("express");
const router = express.Router();

router.get("/", home.displayhome);

router.post("/filter", home.filterdata);

module.exports = router;
