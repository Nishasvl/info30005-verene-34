const html_dir = '/../public/html';
var SavedRecipe = require('../models/saved_recipes.js');

module.exports = {

    saveRecipe: function (req, res) {
        var recipe = {
            uri: req.body.recipeid,
            label: req.body.recipelabel,
            image: req.body.recipeimage,
            url: req.body.recipeurl,
            source: req.body.recipesource,
            ingredients: req.body.recipeingredients,
            health: req.body.recipehealth,
            time: req.body.recipetime,
        };

        console.log(recipe);
        SavedRecipe.update({username: req.user.username}, {
            $push: {
                recipes: recipe,
                $position: 0
            }

        }, {upsert: true}, function (err) {
            if (err) {
                console.log(err);
                res.sendStatus(400)
            } else {
                console.log("Successfully added");
                res.sendStatus(200)
            }
        })
    },

    displayFavourites: function(req, res){
         SavedRecipe.findOne({ 'username' :  req.user.username }, function(err, found) {
            // In case of any error, return using the done method
            if (err){
                console.log('Error: '+err);
                return done(err);
            }
            if (found) {
                console.log(found);
                res.render('favourites_template', {recipes: found.recipes});
            } else {
                res.sendFile('nofaves.html',{root: __dirname + html_dir});


            }

        })
    },

    deleteRecipe : function(req, res){
        SavedRecipe.update({username: req.user.username}, {
            $pull: {
                recipes: {uri: req.body.recipeid}
            }
        }, function (err) {
            if (err) {
                console.log(err);
                res.sendStatus(400)
            } else {
                console.log("Successfully Deleted");
                res.sendStatus(200)
            }

        })

    }
};

