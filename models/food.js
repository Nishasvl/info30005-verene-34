// food item schema
var mongoose =  require('mongoose');
var foodSchema = mongoose.Schema({
        "username": String,
        "name": String,
        "image": String,
        "date": String
    }
);
var Food = mongoose.model('food', foodSchema);
module.exports = Food;