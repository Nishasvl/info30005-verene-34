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



$(document).ready(function(){


    $("body").on("click", ".long-dropdown>.dropbtn", function(){
        var minHeight = $(".dropdown-content").css('min-height');

        if($(this).next().hasClass("open-dropdown")){
            $(".open-dropdown").slideToggle({ direction: "down" }, 300);
            $(".dropdown-content").removeClass("open-dropdown");
            return;
        }

        // CLose the other open dropdown menus
        $(".open-dropdown").slideToggle({ direction: "down" }, 300);
        $(".dropdown-content").removeClass("open-dropdown");

        // Open this dropdown menu
        $(this).next().addClass("open-dropdown")
        $(".open-dropdown").css('min-height',0).slideToggle({ direction: "down" }, 300, function() {
            $(this).css('min-height', minHeight);
        });
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


});

