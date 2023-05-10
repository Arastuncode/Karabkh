$(".hamburger-menu").click(function () {
  $(".bar").toggleClass("animate");
  $("#menu").toggleClass("active");
  $("#links").toggleClass("active");
  $(".bar").toggleClass("active");
  $("a>svg").toggleClass("active");
  $("#add-info").toggleClass("active");
  $("article").toggleClass("none");
});

$(".dropdown").click(function () {
  $(".dropdown-menu").fadeToggle();
});


$(window).scroll(function(){ 
  let offset = $(window).scrollTop() + $(window).height(),
  animatables = $('.animatable');
  animatables.each(function() {
    let animatable = $(this);
    if ((animatable.offset().top + animatable.height() - 20) < offset) {
      $("body").css({overflowX: 'hidden'});
      animatable.removeClass('animatable').addClass('animated');
    }
  });
})