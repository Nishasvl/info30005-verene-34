// Generates hash using bCrypt
var bCrypt = require('bcrypt-nodejs');

module.exports = function(password){
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};