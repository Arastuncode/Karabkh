$(".hamburger-menu").click(function () {
  $(".bar").toggleClass("animate");
  $("#menu").toggleClass("active");
  $("#links").toggleClass("active");
  $(".bar").toggleClass("active");
  $("a>svg").toggleClass("active");
  // $("nav").toggleClass("active");
  $("#add-info").toggleClass("active");
  $("article").toggleClass("none");
  $(this).appendChild("#links")
  return false;
});

$(".dropdown").click(function () {
  $(".dropdown-menu").fadeToggle();
});

$("#popover-trigger").click(function () {
  $("#popover-menu").fadeToggle();
});
