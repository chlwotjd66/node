"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);
router.get("/login", ctrl.login);


// app.get("/register", (req, res) => {
//     res.render("home/register");
// });

module.exports = router;