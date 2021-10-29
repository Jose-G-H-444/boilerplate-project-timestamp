const express = require('express')
const router = express.Router()
const appController = require('../controllers/appController');

router.use(express.urlencoded({extended: true}));
router.use(express.json());

// API Routes
router.post("/api/shorturl", appController.shorturl);

module.exports = router;