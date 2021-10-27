const express = require('express')
const router = express.Router()
const appController = require('../controllers/appController');

// API Routes
router.get("/api/:date?", appController.date);

module.exports = router;