//code from https://code.tutsplus.com/tutorials/authenticating-nodejs-applications-with-passport--cms-21619

var login = require('./login.js');
var signup = require('./signup.js');
var userSchema = require('../models/user.js');

module.exports = function(passport){

    // Passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(user, done) {
        console.log('serializing user: ');console.log(user);
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        userSchema.findById(id, function(err, user) {
            //console.log('deserializing user:',user);
            done(err, user);
        });
    });

    // Setting up Passport Strategies for Login and SignUp/Registration
    login(passport);
    signup(passport);

}