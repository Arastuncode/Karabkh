// import { getData, readURL } from "./info.js";

// $("#image-uploads").change(function () {
//   readURL(this);
// });

// let guestList = []
// let formData = {
//     set : function (){
//         // let  info = [];
//         localStorage.removeItem('info');
//         $('form input').each(function(){
//             let sd = $(this).attr('placeholder')
//             // info.push({ name: sd, value: this.value});
//             localStorage.setItem("guestList", { name: sd, value: this.val()});
//         });
//         localStorage.formData = JSON.stringify(info);
//     }
// }

// $(".btn").click( function() {

// })

$.getJSON("heros.json", function (data) {
  let kod = "";
  $.each(data, function (key, value) {
    kod += `<div class="card" style="background-image:url(${value.img})">
        <h6>${value.name}</h6>
      </div>`
  });
  $("#heros-cards").html(kod);
});
