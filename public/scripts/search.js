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



    // Select a filter / deselect filter
    $(".filter-dropdown").on("click", "li", function(){
        if(this.className === "filter-clicked"){
            $(this).removeClass("filter-clicked");
            return;
        }
        $(this).addClass("filter-clicked");
    });

    //


});

