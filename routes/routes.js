const html_dir = '/../public/html';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');
const request = require('request');


router.get('/', controller.displayPage);


// router.get('/img/:imgID', (req, res) => {
//     // get the imgID from req.params
//     // var imgID = req.params.imgID
//
//     // get the file back
//
//     // res.send + set headers for Content-Type etc.
// })

// // create new user from lecture
/*router.post('/login', controller.login);

router.post('/register', controller.registerUser);

router.get('/api', controller.findAllUsers);

router.get('/api', controller.findOneUser);*/

/*router.post('/foodtracker', controller.registerFood);

router.get('/results', controller.displayRecipes);

router.get('/favourites', controller.displayRecipes);*/





module.exports = router;