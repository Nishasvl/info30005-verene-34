//recipe Ids of favourite recipes

$(document).ready(function(){
    $("body").on("click", ".remove", function(){
        $(this).closest(".recipe").remove();
    });




});
