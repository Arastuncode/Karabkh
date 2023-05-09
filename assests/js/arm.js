let h5 = $("h5")
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
$(".close").click(function () { $('.modal').fadeToggle('fast') });  