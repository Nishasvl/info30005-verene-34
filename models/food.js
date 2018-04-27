var mongoose =  require('mongoose');
var foodSchema = mongoose.Schema({
        "userid": String,
        "foodid": String,
        "name": String,
        "image": String,
        "date": String
    }
);
mongoose.model('food'.foodSchema);