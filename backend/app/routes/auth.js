"use strict";

const express = require("express");
const router = express.Router();
const routes = require(__base + "/app/routes/constant");
const signup = require(__base + "/app/handlers/signup");

//@route POST /auth/signup
//@desc use to signup the users
//@access public

router.post(routes.auth.signup, signup.signingup);

module.exports = router;
