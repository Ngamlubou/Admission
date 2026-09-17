const express = require("express");

const router = express.Router();

const schoolsController = require("../controllers/Schools");

router.post("/", schoolsController.createSchool);

router.get("/", schoolsController.getSchools);

module.exports = router;
