//saved recipes schema

var mongoose =  require('mongoose');
var savedRecipesSchema = mongoose.Schema({
        "username": String,
        "recipes": [{
            label: String,
            uri: String,
            image: String,
            url: String,
            source: String,
            ingredientLines: [String],
            healthLabels: [String],
            totalTime: String,
        }],
    }
);
module.exports = mongoose.model('savedRecipes', savedRecipesSchema);