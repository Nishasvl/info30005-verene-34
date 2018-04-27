var mongoose =  require('mongoose');
var favouritesSchema = mongoose.Schema({
        "userid": String,
        "recipeid": String
    }
);
mongoose.model('favourites'.favouritesSchema);