const express = require('express');
const router = express.Router();
const controller = require('../controllers/coming_soon_controller.js');

router.get('/', controller.displayPage);

module.exports = router;