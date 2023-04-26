export function getData() {
    let inputValues = [];
    $('input').each(function() {
        inputValues.push($(this).val());
    });
    localStorage.setItem('first', JSON.stringify(inputValues));
    // console.log(inputValues);
    let data = []
    let existingData = JSON.parse(localStorage.getItem('first'));
    data.push(inputValues)
    existingData.push(data);
    localStorage.setItem('myArray', JSON.stringify(data));
    console.log(data);
    // return data;
}

export function readURL(input) {
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

$('form input').blur(function(){
    if($(this).val() != ''){
        $(this).addClass('add-border-green');
        $(this).removeClass('add-border-red');
    }else {
        $(this).addClass('add-border-red');
        $(this).removeClass('add-border-green');
    }
    
});