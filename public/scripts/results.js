var recipes = [];
var modalRecipeId;

var defaultGeneral = "All Recipes";
var defaultIngredients = "No Ingredients Entered";

console.log(recipeData);


recipe = {
    uri : "id",
    label : "title",
    image : "image url",
    url : "link",
    source: "source website name",
    healthLabels: "allergerns",
    ingredientLines: "ingredients with quantities",
    yield : "serving no"
}

recipes[0] = {
    recipe_id : 0,
    title : "Chicken Pasta",
    link: "http://www.bestrecipes.com.au/recipe/creamy-chicken-pasta-L3276.html",
    image : "https://images.unsplash.com/photo-1458644267420-66bc8a5f21e4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de4ff3558258d5972b83cec5c963208b&auto=format&fit=crop&w=893&q=80",
    ingredients : ["Chicken Breasts", 'Dried Pasta', 'Cooking Oil', 'Spinach', 'Garlic'],
    time: 30
};

recipes[1] = {
    recipe_id : 1,
    title : "Potato Salad",
    link: "https://www.taste.com.au/recipes/potato-salad/73ab96d8-2747-4af5-aa22-6693fea2f1ba",
    image : "https://img.taste.com.au/5DOotBji/w643-h428-cfill-q90/taste/2016/11/potato-salad-606-1.jpeg",
    ingredients : ['Potatoes', 'Mayonnaise', 'Chives', 'Spinach', 'Bacon'],
    time: 30
};

recipes[2] = {
    recipe_id : 2,
    title : "Pulled-Pork Tacos with a Fresh Tomato Salsa",
    link: "https://www.sbs.com.au/food/recipes/pulled-pork-tacos",
    image : "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/pulled-pork-tacos.gif?itok=FEPm6Bci&mtime=1493630887",
    ingredients : ["pork shoulder", "cumin", "mini tortillas", "tomatoes", "garlic"],
    time: 180
};

recipes[3] = {
    recipe_id : 3,
    title : "Falafel",
    link: "http://www.bestrecipes.com.au/recipe/creamy-chicken-pasta-L3276.html",
    image : "https://img.taste.com.au/Qg0KMMpi/w643-h428-cfill-q90/taste/2016/11/falafel-34797-1.jpeg",
    ingredients : ["Chickpeas", 'Parsley', 'Cooking Oil', 'Coriander', 'Garlic', 'Flour'],
    time: 60
};

recipes[4] = {
    recipe_id : 4,
    title : "Classic Vanilla Cupcakes",
    link: "https://www.eggs.ca/recipes/classic-vanilla-cupcakes",
    image : "https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNjIwIl0/Classic-Vanilla-Cupcakes-CMS.jpg",
    ingredients : ["Caster Sugar", 'Flour', 'Butter', 'Eggs', 'Baking Powder'],
    time: 30
};

var favourites = [recipes[4].recipe_id];


/*reload search results*/
/*
function reloadResults(recipeArray) {
    alert("hey")
    $("#recipesearchbtn").click(function () {
        $("#reciperesults").empty();
    });

    loadRecipes(recipeArray);
}
*/

$(document).ready(function() {
    var header = $('#results-search-header').outerHeight();
    $('#reciperesults').css('margin-top', header + 10 + 55);
});


$(document).ready(function() {
    /*loads the filter menu GET RID OF THIS*/

    $("body").on("click", ".external-link", function () {
        //var recipeId = $(this).closest('.recipe').attr('id');
    });

    $("body").on("click", ".saved", function () {
        var btn = $(this);
        btn.removeClass("saved");
        btn.text("save");

        /*/!*remove item from favourites*!/
            var index = favourites.indexOf(recipeId);
            favourites = favourites.splice(index, 1);
            return;*/

    });


    /*Clicking on a "save" button*/
    $("body").on("click", ".save:not(.saved)", function () {
        var btn = $(this);
        var recipeId = btn.closest('.recipe').attr('id');

        $('.bottom-popup').slideToggle({direction: "up"}, 300)
        $('.bottom-popup').delay(600).fadeOut(1300);

        btn.addClass("saved");
        btn.text("saved");

        /*favourites.push(recipeId);
        console.log(favourites);*/
    });

    /* ------------------------------------------------------ Modal--------------------------------------------------*/
    $(".recipe-grid").on("click", ".info", function () {
        var recipeId = $(this).closest('.recipe').attr('id');
        modalRecipeId = recipeId;
        var recipe;

        for(let i=0; i<recipeData.length; i++){
            console.log(recipeData[i].recipe);
            if(recipeData[i]["recipe"]["uri"] == recipeId){
                recipe = recipeData[i].recipe;
                break;
            }
        }

        $('#info-modal h2').text(recipe.label);
        $('#info-modal p span').text(recipe.totalTime);

        $('#full-ingredient-list').empty();
        $('#info-modal .save').removeClass("saved");
        $('#full-ingredient-list').append($("<lh>").text("Ingredients: "));

        for (let i = 0; i < recipe.ingredientLines.length; i++) {
            var ingredient = $("<li>").text(recipe.ingredientLines[i]);
            $('#info-modal ul').append(ingredient);
        }

        if ($(this).next().hasClass("remove") || $(this).next().hasClass("saved")) {
            $('#info-modal .save').addClass("saved");
            $('#info-modal .save').text("saved");
        }
        ;

        /* Reset and set the recipe link*/
        $('#info-modal a').attr("href", recipe.url);

        document.getElementById("info-modal").style.display = "block";
    });

    /*Close Modal with x*/
    $("#info-modal-container").on("click", ".close", function () {
        $(".modal").css('display', 'none');
    });

    /* Close Modal by clicking on window */
    /*$(window).click(function(e) {
        if (e.target.class == "modal") {
            alert("hey");
            $(".modal").css('display', 'none');
        }
    });*/




});


