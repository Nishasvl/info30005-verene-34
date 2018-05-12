//user schema
var mongoose =  require('mongoose');
var userSchema = mongoose.Schema(
    {
        "username": String,
        // username: {type: String, unique: true},
        "name": String,
        "email": String,
        "password": String
    }
);
var User = mongoose.model('users', userSchema);
module.exports = User;

