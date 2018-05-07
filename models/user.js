var mongoose =  require('mongoose');
var userSchema = mongoose.Schema(
    {
        "username": String,
        "name": String,
        "email": String,
        "password": String
    }
);
var User = mongoose.model('users', userSchema);
module.exports = User;



//
// var mongoose =  require('mongoose');
// var usersSchema = mongoose.Schema(
//     {
//         username: {type: String, unique: true},
//         name: String,
//         email: String,
//         password: String
//     }
// );
// var User = mongoose.model('users', usersSchema);
// module.exports = User;