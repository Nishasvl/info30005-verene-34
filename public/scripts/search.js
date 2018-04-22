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


    $(function(){
        $(".filter-dropdown").load("filtermenu.html");
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
    $(".filter-dropdown").on("click", ".dropbtn", function(){
        $('.dropdown-content').slideToggle({ direction: "down" }, 300)
    });

});

