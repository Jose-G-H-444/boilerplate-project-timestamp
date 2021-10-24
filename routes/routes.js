const express = require('express')
const router = express.Router()
const appController = require('../controllers/appController');

// API Routes
router.get("/api/hello", appController.hello);

module.exports = router;