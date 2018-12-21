"use strict";
const home = require(__base + "/app/handlers/home");

const express = require("express");
const router = express.Router();

//@route get /home/
//@desc get a list of all the parties on the database
//@access private
router.get("/", home.displayhome);

//@route get /home/filter
//@desc filter all the parties on the basis of type
//@access private
router.post("/filter", home.filterdata);

module.exports = router;
