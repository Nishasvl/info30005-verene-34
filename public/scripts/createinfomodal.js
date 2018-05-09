var createinfomodal = function(recipe, btn){

    $('#info-modal h2').text(recipe.label);
    $('#info-modal p span').text(recipe.totalTime);
    $('#info-modal .save').attr("data-recipe-id",recipe.uri);


    $('#full-ingredient-list').empty();
    $('#info-modal .save').removeClass("saved");
    $('#info-modal .save').text("save");

    $('#full-ingredient-list').append($("<lh>").text("Ingredients: "));

    for (let i = 0; i < recipe.ingredientLines.length; i++) {
        var ingredient = $("<li>").text(recipe.ingredientLines[i]);
        $('#info-modal ul').append(ingredient);
    }

    if (btn.next().hasClass("remove") || btn.next().hasClass("saved")) {
        $('#info-modal .save').addClass("saved");
        $('#info-modal .save').text("saved");
    };

    /* Reset and set the recipe link*/
    $('#info-modal a').attr("href", recipe.url);

    document.getElementById("info-modal").style.display = "block";
}