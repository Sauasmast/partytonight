"use strict";

const parties = require("../handlers/parties");

const express = require("express");
const router = express.Router();

router.post("/createparty", parties.createparty);

router.put("/editparty", parties.editparty);
router.delete("/deleteparty", parties.deleteparty);

module.exports = router;
