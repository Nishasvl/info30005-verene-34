
// Create database based on lecture notes
var mongoose = require('mongoose');
// mongoose.connect('mongodb://jennifer:Jennifer1234@ds261429.mlab.com:61429/verene');
mongoose.connect(process.env.DB_URL, function(err){
    if(!err){
        console.log('Connected to mongo');
    }else{
        console.log('Failed to connect to mongo');
    }
});

require('./user.js');
// require('./food.js');
// require('./favourites.js');


// Retrieve works but cant use it based on lecture structure
// var MongoClient = require('mongodb').MongoClient;
//
// // Connect to the db
// MongoClient.connect("mongodb://verene:Verene1234@ds261429.mlab.com:61429/verene", function(err, db) {
//     if(!err) {
//         console.log("We are connected");
//     }
// });

// require('./users.js');
// require('./food.js');
// require('./favourites.js');








