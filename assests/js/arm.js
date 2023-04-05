let h5 = $("#h5")
let p = $("#p")
let src = $('iframe')
$(".modal-toggle").click(function () {
    let id =  $(this).attr('id');
    if(id == "parad"){
        h5.html("BAKI QƏLƏBƏ PARADI");
        p.html("02.02.2021")
        src.attr("src",'https://www.youtube.com/embed/AUuF-_moaWM')
    }
    if(id == "aliyev"){
        h5.html("İLHAM ƏLİYEVİN VƏTƏN MÜHARİBƏSİNDƏ QƏLƏBƏYƏ HƏSR OLUNMUŞ ZƏFƏR PARADINDA NİTQİ");
        p.html("02.02.2021")
        src.attr("src",'https://www.youtube.com/embed/zIF6BTRSewM')
    }
    if(id == "erdogan"){
        h5.html("ZƏFƏR PARADINDA TÜRKİYƏ PREZİDENTİ RƏCƏB TAYYİB ƏRDOĞANIN ÇIXIŞI");
        p.html("02.02.2021")
        src.attr("src",'https://www.youtube.com/embed/d_QQ27v_TtQ')
    }
    $('.modal').fadeToggle('fast');

});  
$(".close").click(function () {
    $('.modal').fadeToggle('fast');

});  
// attr('src')

{/* <div class="modal">
<div class="modal-body">
    <div class="d-flex">
        <div class="h5">
            <h5>İLHAM ƏLİYEVİN VƏTƏN MÜHARİBƏSİNDƏ QƏLƏBƏYƏ HƏSR OLUNMUŞ ZƏFƏR PARADINDA NİTQİ</h5>
            <p>02.02.2021</p>
        </div>
        <button class="close">X</button>
    </div>
    <img src="./assests/img/parad-video-2.png" alt="">
</div>
</div> */}