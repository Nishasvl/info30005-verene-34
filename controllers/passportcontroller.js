//partial code from https://code.tutsplus.com/tutorials/authenticating-nodejs-applications-with-passport--cms-21619

const html_dir = '/../public/html';
const createHash = require('../passport/passwordHash.js');
var User = require('../models/user.js');


module.exports = {
    displayLogin : function(req, res){
        if (req.isAuthenticated()){
            res.redirect('/home')
        }else{
            res.sendFile('login.html', {root: __dirname + html_dir});
        }
    },

    displayHome: function(req, res){
        //res.render('home', { user: req.user });
        res.sendFile('searchpage.html', {root: __dirname + html_dir});
        console.log(req.user);
    },

    displayWelcomeorHome: function(req,res){
        if (req.isAuthenticated()){
            res.redirect('/home')
        }else{
            res.sendFile('welcomepage.html', {root: __dirname + html_dir});
        }
    },

    logoutUser: function(req, res) {
        req.logout();
        res.redirect('/');
    },

    updatePassword : function(req, res) {
        console.log(req.body.password);
        var newPassword = createHash(req.body.password);


        User.findOneAndUpdate({username: req.user.username}, {password: newPassword}, function(err, user) {
            if(err){
                console.log('Error in Updating Password: '+err);
                res.sendStatus(400)
            } else {
                console.log("Password Successfully Updated");
                console.log(user);
                res.sendStatus(200)
            }
        });


    }


};