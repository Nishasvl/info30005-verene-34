//nav bar
$(function(){
    $("#nav-placeholder").load("/html/nav.html");
});




// food tracker
$(document).ready(function($) {

    // retrieving food from mongodb and then running function to display food every time you are on page
    const getFood = () => {
        $.ajax({
            type: "GET",
            url: "/foodtracker",
            success: function(data){
                console.log(data);
                data.forEach(displayFood)
            },
            failure: function(errMsg) {
                console.log(errMsg);
            }
        })
    };


    // gets the food item
    $(function() {
        getFood();
    });
    $('form').submit(function() {
        if ($('#inputfood').val() !== '') {
            getFood();
        }
    });


    //register food - add food to mongodb
    $(function() {
        $('#register-food').submit(false);
        $('#register-food').click(function(e) {
            $.ajax({
                type: "POST",
                url: "/foodtracker",
                data: JSON.stringify({
                    username: $('#exampleInputFile').val(),
                    name: $('#inputfood').val(),
                    image: $('#exampleInputFile').val(),
                    date: $('#inputdate').val()
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
        })

    });


    // Delete button removes the tracked item
    $('.grid-container').on("click", ".delete-btn", function(){
        console.log("hi");
        foodid = $(this).attr('data-mongo-id');

        $.ajax({
            type: "DELETE",
            url: "/foodtracker",
            data: {
                _id : foodid
            },
            success: function(data){
                console.log(data);
            },
            failure: function(errMsg) {
                console.log(errMsg);
            }
        })
        $(this).closest(".grid-item").remove();

    });



});


