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


    // displaying food function
    const displayFood = food => {
        const foodId = food._id;
        const foodname = food.name;

        const expiryDate = food.date;
        const today = (new Date()).setHours(0,0,0,0);
        const daysleft = Math.floor(((Date.parse(expiryDate)) - today) / (1000 * 60 * 60 * 24));

        // notification badge colour
        let colour = '';
        if (daysleft < 0) {
            colour = '<div class="top-right"><span class="w3-badge w3-xlarge w3-red">' + daysleft + '</span></div>';
        }
        else if (daysleft <= 2) {
            colour = '<div class="top-right"><span class="w3-badge w3-xlarge w3-yellow">' + daysleft + '</span></div>';
        }
        else {
            colour = '<div class="top-right"><span class="w3-badge w3-xlarge w3-green">' + daysleft + '</span></div>';
        }

        // creating new food item
        const newLi = $('<div class="grid-item">'
            +'<div class="container1">'
            +'<img src="' + food.image + '" width = "200" height="200" id="' + foodname +'"' + 'alt="' + foodname +'">'
            //+ '<p>' + foodname +'</p>'
            + colour + '<button data-mongo-id="' + foodId +'" class="delete-btn centered" >Delete</button>'
            +'</div>'
            +'</div>');


        // add whole food item to website
        $('.grid-container').append(newLi);

        $('#input').val('');
        return false; // So the change persists
    };




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


