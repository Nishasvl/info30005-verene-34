// nav bar
$(function(){
    $("#nav-placeholder").load("/html/nav.html"); // for the router
});

//account page
$(document).ready(function()
{
    var navItems = $('.admin-menu li > a');
    var navListItems = $('.admin-menu li');
    var allWells = $('.admin-content');
    var allWellsExceptFirst = $('.admin-content:not(:first)');
    allWellsExceptFirst.hide();
    navItems.click(function(e)
    {
        e.preventDefault();
        navListItems.removeClass('active');
        $(this).closest('li').addClass('active');
        allWells.hide();
        var target = $(this).attr('data-target-id');
        $('#' + target).show();
    });

//account page username display
    $.ajax({
        type: "GET",
        url: "/user",
        success: function(data) {
            user = data[0];
            $("#username").text(user.username);
            $("#name").text(user.name);
            $("#email").text(user.email);
        }
    })
});