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
    kod += `<div class="card modal-toggle" onclick="op(this)" style="background-image:url(${value.img})" id="card${key}">
      <h6>${value.name}</h6>
    </div>`
  });
  
  $("#heros-cards").html(kod);
});

function op(x){
  let id = $(x).attr("id"); 
  let index = parseFloat(id.match(/\d+\.\d+|\d+/))
  let newArr = arr[index];
  let kod = ''
  console.log(newArr);
  $.each(newArr, function (key, value) {
    kod +=  `<div class="modal-body">
    <div class="d-flex">
      <div>
        <h5 id="h5">${value}</h5>
        <p id="p"></p>
      </div>
      <button class="close"><i class="fas fa-times"></i></button>
    </div>
  </div>`
  });
  $(".container").append(kod)
}