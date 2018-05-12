const html_dir = '/../public/html';
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const request = require('request');


var User = require('../models/user.js');
var Food = require('../models/food.js');
var SavedRecipe = require('../models/saved_recipes.js');


const resultsPerPage = 24;

module.exports = {

    /*Displays food tracker*******************************************************************************************/
    displayFoodPage : function(req, res){
        res.sendFile('foodtracker.html', {root: __dirname + html_dir});
    },

    /*Displays Recipe results after search ***************************************************************************/
    displayRecipes: function (req, res) {
        var page = 1;
        if(req.query.page) {
            page = parseInt(req.query.page);
        }

        var params = {
            q: "",
            app_id: process.env.API_ID,
            app_key: process.env.API_KEY,
            from: ((page-1) * resultsPerPage).toString(),
            to: ((page-1) * resultsPerPage + resultsPerPage).toString()
        }

        if(req.query.health) {
            params.health = req.query.health;
        }
        if(req.query.q1){
            params.q = req.query.q1;
        }
        if(req.query.q2){
            params.q += "," + req.query.q2;
        }
        if(req.query.t){
            params.time = req.query.t;
        }
        if(req.query['m']) {
            params.ingr = (parseInt(req.query['m']) + req.query.q1.split(',').length).toString();
        }

        //import saved recipes ids to check if button should be 'saved'
        var favouritesIDArray = [];
        SavedRecipe.findOne({ 'username' :  req.user.username }, function(err, found) {
            // In case of any error, return using the done method
            if (err) {
                console.log('Error: ' + err);
                return done(err);
            }
            if (found) {
                for (let i = 0; i < found.recipes.length; i++) {
                    favouritesIDArray.push(found.recipes[i].uri);
                }
            }
        });

        // Make the request to the api
        request.get({
                uri: "https://api.edamam.com/search",
                qs: params,
                method: 'GET',
            },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var locals = JSON.parse(body);
                    res.render('results_template', {
                        locals:locals,
                        searchParams:params,
                        q1:req.query.q1,
                        q2:req.query.q2,
                        m: req.query.m,
                        page: page,
                        favourites: favouritesIDArray
                    });
                }
                /*
                 console.log(response.statusCode, body);
                 res.render("results", {data: JSON.parse(body)});
             } else {
                 console.log(error);
                 return;
             }*/
            })



    },

};

/*Finds the user which is currently logged in ************************************************************************/
var findOneUser = function(req,res){
    var username = req.user.username;
    User.find({username: username}, function(err, user){
        if(!err){
            res.send(user);
        }else{
            res.sendStatus(404);
        }
    });
};

/*Find the food items the user has saved in the food tracker**********************************************************/
var findUserFood = function(req, res) {
    const username = req.user.username;
    Food.find({username: username}, (err, foods) => {
        if (!err) {
            console.log(foods);
            res.send(foods);
        } else {
            res.sendStatus(404);
        }
    })
};

/*Add a food to the food tracker database*****************************************************************************/
var registerFood = function(req, res){
    console.log(req.body);
    var food = new Food({
        "username": req.user.username,
        "name": req.body.name,
        "image": req.body.image,
        "date": req.body.date,

    });
    food.save(function(err, newFood){
        if(!err){
            res.send(newFood);
        } else{
            res.sendStatus(400);
        }
    })
};

/*Delete a food item from the  food tracker database******************************************************************/
var deleteFood = function(req, res) {
    console.log(req.body);
    Food.findByIdAndRemove(req.body._id, function(err, newFood){
        if(!err){
            res.send(newFood);
        } else{
            res.sendStatus(400);
        }
    })

};

module.exports.findOneUser = findOneUser;
module.exports.findUserFood = findUserFood;
module.exports.registerFood = registerFood;
module.exports.deleteFood = deleteFood;