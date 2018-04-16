const user = require("testuserdata");
const recipes = require("testrecipedata.js");

var favourites = {
    user_id : user.user_id,
    favourite_recipes : [recipes[0], recipes[2]]
}
module.exports = favourites;