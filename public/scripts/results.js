/*recipe = {
    uri : "id",
    label : "title",
    image : "image url",
    url : "link",
    source: "source website name",
    healthLabels: "allergerns",
    ingredientLines: "ingredients with quantities",
    yield : "serving no"
}*/


$(document).ready(function() {
    /*Set the top margin of the recipe results**/
    var header = $('#results-search-header').outerHeight();
    $('#reciperesults').css('margin-top', header + 10 + 55);


    /*Unsaving a Recipe*/
    $("body").on("click", ".saved", function () {
        var btn = $(this);
        var recipeId = btn.attr("data-recipe-id");

        deleteRecipe(recipeId);
        btn.removeClass("saved");
        btn.text("save");
    });

/*    $("info-modal-container").on("click", ".saved", function () {
        var btn = $(this);
        var recipeId = btn.attr("data-recipe-id");

        deleteRecipe(recipeId);
        btn.removeClass("saved");
        btn.text("save");

        //return main save btn back to normal
        var mainsavebtn = $(".reciperesults .save[data-recipe-id=recipeId]");
        mainsavebtn.removeClass("saved");
        mainsavebtn.text("save");
    });*/


    /*Saving a recipe*/
    $("body").on("click", ".save:not(.saved)", function () {
        var btn = $(this);

        var recipeId = btn.attr('data-recipe-id');
        var recipe = $.grep(recipeData, function(e){ return e.recipe.uri == recipeId; })[0].recipe;

        //Save confirmation popup
        $('.bottom-popup').slideToggle({direction: "up"}, 200)
        $('.bottom-popup').delay(500).fadeOut(500);

        $.ajax({
            type: "POST",
            url: "/results",
            data: JSON.stringify({
                recipelabel: recipe.label,
                recipeid: recipeId,
                recipeimage: recipe.image,
                recipeurl: recipe.url,
                recipesource: recipe.source,
                recipehealth: recipe.healthLabels,
                recipeingredients: recipe.ingredientLines,
                recipetime: recipe.totalTime

            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data){
                console.log(data);
            },
            failure: function(errMsg) {
                console.log(errMsg);
            }
        });

        //Change button css to "saved"
        btn.addClass("saved");
        btn.text("saved");

        /*var mainsavebtn = $(".save[data-recipe-id=recipeId]");
        console.log(mainsavebtn)
        mainsavebtn.addClass("saved");
        mainsavebtn.text("saved");*/
    });

    /* ------------------------------------------------------ Modal--------------------------------------------------*/
    $(".recipe-grid").on("click", ".info", function () {
        var btn = $(this);
        var recipeId = btn.closest('.recipe').attr('id');
        var recipe;

        for(let i=0; i<recipeData.length; i++){
            console.log(recipeData[i].recipe);
            if(recipeData[i]["recipe"]["uri"] == recipeId){
                recipe = recipeData[i].recipe;
                break;
            }
        }

        createinfomodal(recipe, btn);
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


