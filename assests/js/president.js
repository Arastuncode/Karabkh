let h5 = $("#h5")
let iframe = $("iframe")
$(".modal-toggle").click(function () {
    $('.modal').fadeToggle('fast');
    h5.html($(this).next('p').html());
    let src = $(this).closest("div").find("img").att()
    console.log(src);
    // iframe.attr("src",src)    
});  
$(".close").click(function () {
    $('.modal').fadeToggle('fast');
}); 