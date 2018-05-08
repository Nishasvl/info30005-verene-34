var mongoose =  require('mongoose');
var savedRecipesSchema = mongoose.Schema({
        "username": String,
        "recipes": [{
            label: String,
            uri: String,
            image: String,
            url: String,
            source: String,
            ingredients: [String],
            health: [String],
            time: String,
        }],
    }
);
module.exports = mongoose.model('savedRecipes', savedRecipesSchema);