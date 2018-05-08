var recipes = [];
var modalRecipeId;

var defaultGeneral = "All Recipes";
var defaultIngredients = "No Ingredients Entered";

console.log(recipeData);


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

    });


    /*Clicking on a "save" button*/
    $("body").on("click", ".save:not(.saved)", function () {
        var btn = $(this);

        var recipeId = btn.closest('.recipe').attr('id');
        var recipe = $.grep(recipeData, function(e){ return e.recipe.uri == recipeId; })[0].recipe;

        /*var recipeImage = btn.closest('.recipe').find('img').attr('src');
        var recipeURL = btn.closest('.recipe').find('.external-link').attr('href');
        var recipeSource = btn.closest('.recipe').find('.recipe-source').text();

*/
        console.log(recipe);
        $('.bottom-popup').slideToggle({direction: "up"}, 200)
        $('.bottom-popup').delay(300).fadeOut(500);

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

        btn.addClass("saved");
        btn.text("saved");
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
        };

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


