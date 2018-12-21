"use strict";

const parties = require("../handlers/parties");

const express = require("express");
const router = express.Router();

//@route POST /party/createparty
//@desc create a new party
//@access private
router.post("/createparty", parties.createparty);

//@route put /party/editparty
//@desc edit the specific party
//@access private
router.put("/editparty", parties.editparty);

//@route POST /party/deleteparty
//@desc delete a specific party record
//@access private
router.delete("/deleteparty", parties.deleteparty);

//@route POST /party/deleteparty
//@desc delete a specific party record
//@access private
router.get("/getparty/:party_id", parties.get_info_party);

module.exports = router;
