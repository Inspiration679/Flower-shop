$(function () {
    $(".btn").click(function () {
        $(".registration-active").toggleClass("registration-inactive");
        $(".login-inactive").toggleClass("login-active");
        $(".signup-active").toggleClass("signup-inactive");
        $(".signin-inactive").toggleClass("signin-active");
    });
});