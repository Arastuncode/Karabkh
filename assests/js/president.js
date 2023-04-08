let h5 = $("#h5")
let iframe = $("iframe")
$(".modal-toggle").click(function () {
    $('.modal').fadeToggle('fast');
    let src = $(this).next('span').html() 
    iframe.attr("src",src.split(",")[0])   
    h5.html(src.split(",")[1]);
    // console.log(src.split(",")[0]);
});  
$(".close").click(function () {
    $('.modal').fadeToggle('fast');
}); 
