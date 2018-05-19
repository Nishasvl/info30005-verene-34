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


