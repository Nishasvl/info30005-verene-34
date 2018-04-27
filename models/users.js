var mongoose =  require('mongoose');
var usersSchema = mongoose.Schema({
    "username": String,
    "name": String,
    "email": String,
    "password": String
}
);
mongoose.model('users'.usersSchema);