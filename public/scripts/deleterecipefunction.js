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