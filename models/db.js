
// Create database
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
require('./food.js');
require('./favourites.js');










