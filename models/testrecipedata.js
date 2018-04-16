var recipes = [];

var recipetitles=["Chicken Pasta", "Potato Salad", "Pulled-Pork Tacos",
    "Beef Brisket Noodle Soup"];

recipes[0] = {
    recipe_id : 1,
    title : "Chicken Pasta",
    link: "http://www.bestrecipes.com.au/recipe/creamy-chicken-pasta-L3276.html",
    image : "https://images.unsplash.com/photo-1458644267420-66bc8a5f21e4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de4ff3558258d5972b83cec5c963208b&auto=format&fit=crop&w=893&q=80"
    ingredients : ["2 Chicken Breasts", '200g Dried Pasta', '2 TBSP Cooking Oil', '2 cups Spinach', '2 cloves of Garlic"]
};

recipes[1] = {
    recipe_id : 2,
    title : "Potato Salad",
    link: "https://www.taste.com.au/recipes/potato-salad/73ab96d8-2747-4af5-aa22-6693fea2f1ba",
    image : "https://img.taste.com.au/5DOotBji/w643-h428-cfill-q90/taste/2016/11/potato-salad-606-1.jpeg",
    ingredients : ["4 Potatoes', '4 TBSP Mayonnaise', '2 sprigs of Chives', '2 cups Spinach', '4 Slice of Bacon"]
};

recipes[3] = {
    recipe_id : 3,
    title : "Pulled-Pork Tacos",
    link: "https://www.sbs.com.au/food/recipes/pulled-pork-tacos",
    image : "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/pulled-pork-tacos.gif?itok=FEPm6Bci&mtime=1493630887",
    ingredients : ["500g pork shoulder", "2tsp cumin", "15 mini tortillas", "3 tomatoes", "3 cloves garlic"]
};
module.exports = recipes;



