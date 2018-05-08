//recipe Ids of favourite recipes
var deleteRecipe = function(recipeId){
    $.ajax({
        type: "DELETE",
        url: "/favourites",
        data: JSON.stringify({
            recipeid: recipeId,
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        failure: function (errMsg) {
            console.log(errMsg);
        }

    });
}

$(document).ready(function(){

    $("body").on("click", ".external-link", function () {
        //var recipeId = $(this).closest('.recipe').attr('id');
    });

    // Delete a recipe from favourites
    $("body").on("click", ".remove", function() {
        recipeId = $(this).closest(".recipe").attr('id');
        deleteRecipe(recipeId);
        $(this).closest(".recipe").remove();


        /*$('.bottom-popup').slideToggle({direction: "up"}, 300)
        $('.bottom-popup').delay(600).fadeOut(1300);*/
    })


    // view more info about a recipe
    $(".recipe-grid").on("click", ".info", function () {
        var recipeId = $(this).closest('.recipe').attr('id');
        var recipe;

        for(let i=0; i<savedRecipes.length; i++){
            if(savedRecipes[i]["uri"] == recipeId){
                recipe = savedRecipes[i];
                console.log(recipe);
                break;
            }
        }

        $('#info-modal h2').text(recipe.label);
        $('#info-modal p span').text(recipe.time);

        $('#full-ingredient-list').empty();
        $('#info-modal .save').removeClass("saved");
        $('#full-ingredient-list').append($("<lh>").text("Ingredients: "));

        for (let i = 0; i < recipe.ingredients.length; i++) {
            var ingredient = $("<li>").text(recipe.ingredients[i]);
            $('#info-modal ul').append(ingredient);
        }

        if ($(this).next().hasClass("remove") || $(this).next().hasClass("saved")) {
            $('#info-modal .save').addClass("saved");
            $('#info-modal .save').text("saved");
        };

        /* Reset and set the recipe link*/
        $('#info-modal a').attr("href", recipe.url);

        document.getElementById("info-modal").style.display = "block";
    });

    /*Close Modal with x*/
    $("#info-modal-container").on("click", ".close", function () {
        $(".modal").css('display', 'none');
    });

    $("body").on("click", ".saved", function () {
        $(".modal").css('display', 'none');


        /*var btn = $(this);
        btn.removeClass("saved");
        btn.text("save");*/

    });


});
