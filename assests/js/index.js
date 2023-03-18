$(".hamburger-menu").click(function () {
    $(".bar").toggleClass("animate");
    $("#menu").toggleClass("active");
    console.log('salam');
    return false;
});

$(".dropdown").click(function () {
    $(this).nextAll("ul").fadeToggle("fast");
})