$(document).ready(function(){

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

        createinfomodal(recipe, $(this));
    });

    /*Close Modal with x*/
    $("#info-modal-container").on("click", ".close", function () {
        $(".modal").css('display', 'none');
    });

    /*Delete a recipe*/
    $("body").on("click", ".saved", function () {
        $(".modal").css('display', 'none');
        var recipeId = $(this).attr("data-recipe-id");
        deleteRecipe()

        /*var btn = $(this);
        btn.removeClass("saved");
        btn.text("save");*/

    });
});
