// routes/emailRoutes.js
const express = require("express");
const router = express.Router();
const emailController = require("../controllers/emailController");

router.post("/welcome", emailController.sendWelcomeEmail);
router.post("/new-course", emailController.sendNewCourseEmail);

module.exports = router;
