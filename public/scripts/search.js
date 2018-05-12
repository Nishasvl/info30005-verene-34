//nav bar
$(function(){
    $("#nav-placeholder").load("/html/nav.html");
});


// search bar
$(function(){
    $("#search-placeholder").load("/html/searchbar.html");
});

$(document).ready(function(){

    $("body").on("click", ".long-dropdown>.dropbtn", function(){
        var minHeight = $(".dropdown-content").css('min-height');

        if($(this).next().hasClass("open-dropdown")){
            $(".open-dropdown").slideToggle({ direction: "down" }, 300);
            $(".dropdown-content").removeClass("open-dropdown");
            return;
        }

        // Close the other open dropdown menus
        $(".open-dropdown").slideToggle({ direction: "down" }, 300);
        $(".dropdown-content").removeClass("open-dropdown");

        // Open this dropdown menu
        $(this).next().addClass("open-dropdown")
        $(".open-dropdown").css('min-height',0).slideToggle({ direction: "down" }, 300, function() {
            $(this).css('min-height', minHeight);
        });
    });

});


// expiring soon section
$(document).ready(function($) {

    //get food items from mongodb
    const getFood = () => {
        $.ajax({
            type: "GET",
            url: "/foodtracker",
            success: function(data){
                console.log(data);
                displayAllFood(data)
            },
            failure: function(errMsg) {
                console.log(errMsg);
            }
        })
    };


    // displaying food items
    $(function() {
        getFood();
    });
    $('form').submit(function() {

        if ($('#inputfood').val() !== '') {
            getFood();
        }
    });


    // displaying expiring soon food items (0-2 days before overdue)
    const displayAllFood = foods => {
        const today = (new Date()).setHours(0,0,0,0);
        let counter = 0;
        foods.forEach(food => {
            const expiryDate = food.date;
            const daysLeft = Math.floor(((Date.parse(expiryDate)) - today) / (1000 * 60 * 60 * 24));

            // if food item expiring in 0 to 2 days display it (display only first 2 items)
            if (daysLeft >=0 && daysLeft <= 2 && counter < 2) {
                counter++;
                const foodId = food._id;
                const foodname = food.name;
                const newLi = $('<div class="grid-item">'+'<div class="container1">'+'<img src="' + food.image + '" width = "200" height="200" id="' + foodname +'"' + 'alt="' + foodname +'">' +'</div>'+'</div>');
                // add whole input of item to website
                $('.soon-grid-container').append(newLi);
            }
        });

        // if no food item expiring soon then section empty
        if (counter === 0) {
            const line = $('<h3>No food expiring anytime soon!</h3>');
            $('.soon-grid-container').append(line)
        }

        return false;
    };
});








/*$('#myForm').submit(function() {
    // Get all the forms elements and their values in one step
    var values = $(this).serialize();

});*/

//Form submission
/*$('#search-placeholder').on("click", "#mainsearchbtn", function () {

    //#search-placeholder #timeform, #search-placeholder #ingrform
    var dataString = $("#search-placeholder #searchform, #search-placeholder #timeform, #search-placeholder #ingrform").serialize();
    console.log(dataString);

    $.ajax({
        type: 'GET',
        url: '/results',
        data: dataString,
        success: function(result) {


        },
        error: function(error) {
            alert(error);
        }
    });

});*/



/*function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}*/

// Close the dropdown if the user clicks outside of it
/*window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}*/


