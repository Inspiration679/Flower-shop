$(function () {
    $(".btn").click(function () {
        $(".regist-active").toggleClass("registr-inactive");
        $(".login-inactive").toggleClass("login-active");
        $(".signup-inactive").toggleClass("signup-active");
        $(".signin-active").toggleClass("signin-inactive");
        $(".reg-button-div-active").toggleClass("reg-button-div-inactive");
        $(".log-button-div-inactive").toggleClass("log-button-div-active");
    });
});