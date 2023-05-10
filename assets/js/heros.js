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
  let value =  Object.values(newArr)
  let keys =  Object.keys(newArr)
  let kod = ''
  kod +=  `<div class="d-flex">
      <div id="hero-img">
        <h2>${value[1]}</h2>
        <img src="${value[0]}" alt="" />
      </div>
      <div id="hero-detail">
        <div id="text">
          <p>${keys[2]}: <span>${value[2]}</span></p>
          <p>${keys[3]}: <span>${value[3]}</span></p>
          <p>${keys[4]}: <span>${value[4]}</span></p>
          <p>${keys[5]}: <span>${value[5]}</span></p>
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