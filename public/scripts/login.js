const registerTab="register"
const loginTab="login"

$(function() {
    $(function(){
        var url_string = window.location.href;
        var tab = url_string.split("#");
        if(tab.includes(registerTab)){
            $("#register-form").show();
            $("#login-form").hide();

            $('#login-form-link').removeClass('active');
            $('#register-form-link').addClass('active');
        }
    });

    // passport log in function
    $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    // passport register function
    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });




});