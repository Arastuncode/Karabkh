$(".hamburger-menu").click(function () {
  $(".bar").toggleClass("animate");
  $("#menu").toggleClass("active");
  $("#links").toggleClass("active");
  $(".bar").toggleClass("active");
  $("a>svg").toggleClass("active");
  $("#add-info").toggleClass("active");
  $("article").toggleClass("none");
  return false;
});

$(".dropdown").click(function () {
  $(".dropdown-menu").fadeToggle();
});



$(window).scroll(function(){ 
  $(".fade-in").each(function () {
    if (isScrolledIntoView($(this))) {
      $(this).css({
        opacity: 1,
        visibility: "visible",
      });
    } else {
      $(this).css({
        opacity: 0,
        visibility: "hidden",
      });
    }
  });
  
  $(".fade-in-up").each(function () {
    let point = "0px",
      move = "100px";
  
    if (isScrolledIntoView($(this))) {
      $(this).css({
        opacity: 1,
        visibility: "visible",
        "-webkit-transform": "translateY(" + point + ")",
        transform: "translateY(" + point + ")",
      });
    } else {
      $(this).css({
        opacity: 0,
        visibility: "hidden",
        "-webkit-transform": "translateY(" + move + ")",
        transform: "translateY(" + move + ")",
      });
    }
  });

  $(".fade-in-down").each(function () {
    let point = "0px",
      move = "-100px";
    if (isScrolledIntoView($(this))) {
      $(this).css({
        opacity: 1,
        visibility: "visible",
        "-webkit-transform": "translateY(" + point + ")",
        transform: "translateY(" + point + ")",
      });
    } else {
      $(this).css({
        opacity: 0,
        visibility: "hidden",
        "-webkit-transform": "translateY(" + move + ")",
        transform: "translateY(" + move + ")",
      });
    }
  });
  $('.fade-in-right').each(function(){        
    let point = "0px", side = "50px";
    if(isScrolledIntoView($(this))){        
      $(this).css({
        'opacity':1,
        'visibility':'visible',
        '-webkit-transform': 'translateX(' + point + ')',
        'transform': 'translateX(' + point + ')'                    
      });
    }
    else{
      $(this).css({
        'opacity':0,
        'visibility':'hidden',
        '-webkit-transform': 'translateX(' + side + ')',
        'transform': 'translateX(' + side + ')'                    
      });
    }
  });
  $('.fade-in-left').each(function(){        
    let point = "0px", move = "-50px";  
    if(isScrolledIntoView($(this))){        
      $(this).css({
        'opacity':1,
        'visibility':'visible',
        '-webkit-transform': 'translateX(' + point + ')',
        'transform': 'translateX(' + point + ')'                    
      });
    }
    else{
      $(this).css({
        'opacity':0,
        'visibility':'hidden',
        '-webkit-transform': 'translateX(' + move + ')',
        'transform': 'translateX(' + move + ')'                    
      });
    }
  });
  function isScrolledIntoView(elem){
    let $elem = $(elem);
    let $window = $(window);
    let docViewTop = $window.scrollTop();
    let docViewBottom = docViewTop + $window.height();
    let elemTop = $elem.offset().top;
    let elemBottom = elemTop + $elem.height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
})