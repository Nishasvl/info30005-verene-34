const html_dir = '/../public/html';
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user.js');
var Food = require('../models/food.js');
var SavedRecipe = require('../models/saved_recipes.js');



const request = require('request');

const resultsPerPage = 24;

module.exports = {
    displayPage : function(req, res){
        res.sendFile('welcomepage.html', {root: __dirname + html_dir});
        },

    //Can reuse this for the saved recipes part
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

       // console.log(favouritesIDArray);

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
                /* //this isn't printing for some reason
                 console.log(response.statusCode, body);
                 res.render("results", {data: JSON.parse(body)});
             } else {
                 console.log(error);
                 return;
             }*/
            })



    },

};

// module.exports = {
//     registerUser: function (req, res) {
//         var username = req.body.username;
//         var name = req.body.name;
//         var email = req.body.email;
//         var password = req.body.password;
//
//         var newuser = new User();
//         newuser.username = username;
//         newuser.name = name;
//         newuser.email = email;
//         newuser.password = password;
//
//         newuser.save(function (err, savedUser) {
//             if (err) {
//                 console.log(err);
//                 return status(500).send();
//             }
//             return res.status(200).send();
//         });
//
//     }
// };



// from lecture
// //
// module.exports = {
//     registerUser: function (req, res) {
//         var user = new User({
//             "username": req.body.username,
//             "name": req.body.name,
//             "email": req.body.email,
//             "password": req.body.password
//         });
//         user.save(function (err, newUser) {
//             if (!err) {
//                 res.send(newUser);
//             } else {
//                 res.sendStatus(400);
//             }
//         });
//     }
// };


//
var registerUser = function(req, res){
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    var user = new User({
        "username": req.body.username,
        "name": req.body.name,
        "email": req.body.email,
        "password": hashedPassword
    });
    user.save(function(err,newUser){
        if(!err){
            res.send(newUser);
        } else{
            res.sendStatus(400);
        }
    })
};

var login = function(req, res){
    console.log(req.body);
    const username = req.body.username;
    User.findOne({username: username}, username, (err, user) => {
        if (!err) {
            console.log(user);
            if (bcrypt.compareSync(req.body.password, user.password)) {
                const token = jwt.sign({ id: user.username }, process.env.SECRET, {
                    expiresIn: 86400 // expires in 24 hours
                });
                res.status(200).send({auth: true, token: token});
                console.log("worked")
            } else {
                res.sendStatus(401);
                console.log("didn't work");
            }
        } else {
            res.sendStatus(404);
            console.log("couldn't find user")
        }
    });
};


var findAllUsers = function(req,res){
    User.find(function(err,users){
        if(!err){
            res.send(users);
        }else{
            res.sendStatus(404);
        }
    });
};

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
//
module.exports.registerUser = registerUser;
module.exports.findAllUsers = findAllUsers;
module.exports.findOneUser = findOneUser;
module.exports.login = login;
module.exports.findUserFood = findUserFood;
module.exports.registerFood = registerFood;
module.exports.deleteFood = deleteFood;