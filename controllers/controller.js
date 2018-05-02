const html_dir = '/../public/html';

var mongoose = require('mongoose');
var User = mongoose.model('users');



module.exports = {
    displayPage : function(req, res){
        res.sendFile('welcomepage.html', {root: __dirname + html_dir});
    }
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
    var user = new User({
        "username": req.body.username,
        "name": req.body.name,
        "email": req.body.email,
        "password": req.body.password
    });
    user.save(function(err,newUser){
        if(!err){
            res.send(newUser);
        } else{
            res.sendStatus(400);
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
    var userInx = req.params.id;
    User.findById(userInx, function(err, user){
        if(!err){
            res.send(user);
        }else{
            res.sendStatus(404);
        }
    });
};
//
module.exports.registerUser = registerUser;
module.exports.findAllUsers = findAllUsers;
module.exports.findOneUser = findOneUser;


