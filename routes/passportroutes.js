const html_dir = '/../public/html';
const controller = require('../controllers/passportcontroller.js');
const express = require('express');
const router = express.Router();

var isAuthenticated = function (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated())
        return next();
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/login');
}

module.exports = function(passport){

    router.get('/account', function(req, res){
        res.sendFile('accountpage.html', {root: __dirname + html_dir});
    });


    /*/!* GET login page. *!/
    router.get('/html/login.html', function(req, res) {
        // Display the Login page with any flash message, if any
        res.render('index', { message: req.flash('message') });
    });*/

    /* GET Registration Page */
    /*router.get('/signup', function(req, res){
        res.render('register',{message: req.flash('message')});
    });*/


    /* Login Page Display */
    router.get('/login', controller.displayLogin);

    /* Handle Login POST */
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/home',
        failureRedirect: '/login',
        //failureFlash : true
    }));


    /* Handle Registration POST */
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/home',
        failureRedirect: '/signup',
        failureFlash : true
    }));

    /* GET Home Page */
    router.get('/home', isAuthenticated, controller.displayHome);

    /* GET Welcome or Home Page Depending if User is Logged in */
    router.get('/', controller.displayWelcomeorHome);

    /* Handle Logout */
    router.get('/logout', controller.logoutUser);


    return router;
}


