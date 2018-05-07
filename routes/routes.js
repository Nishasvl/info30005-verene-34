const html_dir = '/../public/html';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');


//main pages


/*
router.get('/', controller.displayPage);
*/



// // create new user from lecture
/*router.post('/login', controller.login);

router.post('/register', controller.registerUser);

router.get('/api', controller.findAllUsers);

router.get('/api', controller.findOneUser);*/



module.exports = router;



// var path = require('path');
// var bodyParser = require('body-parser');
// var mongodb = require('mongodb');
//
// var dbConn = mongodb.MongoClient.connect('mongodb://jennifer:Jennifer1234@ds261429.mlab.com:61429/verene');
//
// var app = express();
//
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.resolve(__dirname, 'public')));
//
//
// app.post('/post-feedback', function (req, res) {
//     dbConn.then(function(db) {
//         delete req.body._id; // for safety reasons
//         db.collection('feedbacks').insertOne(req.body);
//     });
//     res.send('Data received:\n' + JSON.stringify(req.body));
// });

