const express = require("express");
const router = express.Router();

//controllers
const { signup, login, logout } = require("../controllers/authController.js");
const { validateUser } = require("../middlewares.js");
const catchAsync = require('../utils/catchAsync.js');

//router.post("/signup", validateUser, catchAsync(signup));
router.post("/signup", catchAsync(signup))
router.post("/login", catchAsync(login));
router.get("/logout", catchAsync(logout));

module.exports = router;