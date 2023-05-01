function readURL(input) {
  let img = '';
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = function (e) {
    img = e.target.result
    $("#box").css("background-image", `url('${e.target.result}')`);
    $("#box").hide();
    $("#box").fadeIn(650);
  };
  reader.readAsDataURL(input.files[0]);
}}
$("#image-uploads").change(function () { readURL(this) });

$("#add-btn").click( function() {
  let heroName = $("#name").val() + " " + $("#surname").val() + " " + $("#fName").val() + " "  + "OĞLU";
  let birthDate = $("#birthDate").val()
  let deathDate = $("#deathDate").val()
  let age = Number(birthDate) - Number(deathDate)
  let birthPlace = $("#birthCountry").val() + ", " + $("#birthCity").val() + ", " + $("#birthTown").val()
  let education = $("#educationPlace").val()
  
  $.getJSON("heros.json", function(data) {
    // Add a new object to the JSON array
    let newData = {"name": "John", "age": 25}
    data.push(newData);
  
    // Send the updated data to the server
    $.ajax({
      type: "POST",
      url: "heros.json",
      data: JSON.stringify(data),
      dataType: "json",
      contentType: "application/json",
      success: function() {
        console.log("Data saved successfully.");
      },
      error: function() {
        console.log("Error saving data.");
      }
    });
  });
})

let arr = []
$.getJSON("heros.json", function (data) {
  let kod = "";
  $.each(data, function (key,value) { arr.push(value) });
  $.each(data, function (key, value) {
    kod += `<div class="card" onclick="op(this)" style="background-image:url(${value.img})" id="card${key}">
      <div class="shadow"><h6>${value.name}</h6></div>
    </div>`
  });
  
  $("#heros-cards").html(kod);
});

function op(x){
  let id = $(x).attr("id"); 
  let index = parseFloat(id.match(/\d+\.\d+|\d+/))
  let newArr = arr[index];
  let kod = ''
  let array = [];
  $.each(newArr, function (key){ array.push(newArr[key]) })
  kod +=  `
  <div class="d-flex">
    <div id="hero-img">
      <h2>${array[1]}</h2>
        <img src="${array[0]}" alt="" />
      </div>
      <div id="hero-detail">
        <div id="text">
          <p>Doğum tarixi: <span>${array[2]}</span></p>
          <p>Doğum yeri: <span>${array[3]}</span></p>
          <p>Vəfat tarixi: <span>${array[4]}</span></p>
          <p>Təhsili: <span>${array[6]}</span></p>
        </div>
      </div>
  </div>`
  $(".detail").html(kod)
  $("#heros-cards").hide(500)
  $("#detail").show(500)
}

$(".back").click(function () {
  $("#heros-cards").show(500)
  $("#detail").hide(500)
})