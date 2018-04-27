const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');

router.get('/', controller.displayPage);


//create new user from lecture
// router.post('/api', controller.createUser);

module.exports = router;