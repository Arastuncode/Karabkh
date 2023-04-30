function readURL(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            $("#box").css("background-image", `url('${e.target.result}')`);
            $("#box").hide();
            $("#box").fadeIn(650);
        };
        reader.readAsDataURL(input.files[0]);
    }
}