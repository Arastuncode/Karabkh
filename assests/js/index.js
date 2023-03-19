$(".hamburger-menu").click(function () {
    $(".bar").toggleClass("animate");
    $("#menu").toggleClass("active");
    $("#links").toggleClass("active");
    $(".bar").toggleClass("active");
    $("a>svg").toggleClass("active");
    $("nav").toggleClass("active");
    $("#search").toggleClass("active");
    $("#add-info").toggleClass("active");
    return false;
});

$(".dropdown").click(function () {
    $(this).nextAll("ul").fadeToggle("fast");
})