let info = [
    ["Şəhid mayorun ailəsinə son məktubu","03.10.2021","https://www.youtube.com/embed/JH8t5VH2hso"],
    ["Xalq artistinin şəhid oğlu Rövşən Nurzadə","22.09.2021","https://www.youtube.com/embed/hm7P89noLQA"],
    ["\"Alim\" ləqəbli Şəhid Ceyhun Şalıyev","25.11.2021","https://www.youtube.com/embed/6SfMyKIBcJM"],
    ["Əbdürrəhmanlıda şəhid olan Şahgündüz Cabbarov","21.01.2021","https://www.youtube.com/embed/vawC4sk1O1Q"],
    ["Qardaşı Həsən Qorxmazın qisasını alan polkovnik-leytenant Faiq Qasımov","27.01.2021","https://www.youtube.com/embed/SnzW3dgT6N0"],
    ["Şuşa uğrunda şəhid olan İsmayıl Kərimli","15.02.2021","https://www.youtube.com/embed/Qp4wHz6YcxQ"],
    ["1500 ermənini öz dillərində aldadan XTQ baş giziri Camal İsmayılov","20.02.2021","https://www.youtube.com/embed/zcrC7GYXm4I"],
    ["Gülüşü ilə yaddaşlarda qalan şəhid Cavid Həsənov","14.03.2021","https://www.youtube.com/embed/pTgMSWFlJno"],
    ["“Canavar” ləqəbli şəhid polkovnik-leytenant şəhid Rəşad Quliyev","15.03.2021","https://www.youtube.com/embed/XVCHvwC0VD0"],
    ["Xocalı qatilini öldürən şəhid Vüqar Cəfərov","23.03.2021","https://www.youtube.com/embed/lh9Me7ihtrc"],
    ["Xüsusi Təyinatlı Snayper şəhid Cavid Hüseynov","29.03.2021","https://www.youtube.com/embed/g1Hgy1mOOk8"],
    ["İlanlı dağa Azərbaycan bayrağını sancan şəhid mayor","14.04.2021","https://www.youtube.com/embed/3ibQ-lCLXC4"],
    ["Şuşa azad olunandan sonra şəhid olan mayor Fərid Ələkbərov","17.04.2021","https://www.youtube.com/embed/cebFEuFhjWI"],
    ["“Qara qartal” ləqəbli xüsusi təyinatlı Ramiz Cəfərov","22.04.2021","https://www.youtube.com/embed/sYhu5jOWkto"],
    ["Qarabağ müharibəsinin çempion şəhidi Bəhruz Əhmədov","16.05.2021","https://www.youtube.com/embed/ON0Ej8MTjYE"],
    ["\Əfsanəvi \"Kobra\" ləqəbli polkovnik-leytenant kim idi?","21.05.2021","https://www.youtube.com/embed/rLl_rq3U8M0"],
    ["Körpə oğlunu cəmi bir gün görə bilən şəhid Orxan İsmayılov","08.04.2023","https://www.youtube.com/embed/VSmM37vCZKU"],
    ["Şuşa azad olunan gün dəfn edilən mayor","29.05.2021","https://www.youtube.com/embed/dNM0pef19Eg"],
    ["\"Şəhid olsam, bu fotonu paylaşarsınız\" - XTQ şəhidi Kamil Şirinov","05.06.2021","https://www.youtube.com/embed/FvvE_kBeyWQ"],
    ["25 il sonra arzusuna çatan şəhid polkovnik-leytenant Nail Orucov","15.06.2021","https://www.youtube.com/embed/HM_RfMFntmg"],
    ["“Tənha Canavar” ləqəbli kəşfiyyatçı şəhid Elçin Mansurov","21.06.2021","https://www.youtube.com/embed/P4qypIjrZ0g"],
    ["Vətən Müharibəsində tarix yazan tarix müəllimi Xalid Nəciyev","03.07.2021","https://www.youtube.com/embed/mALpgf3EgZI"],
    ["72 gün ailəsinin xəbərsiz qaldığı şəhid mayor Vüsal Vəliyev","15.07.2021","https://www.youtube.com/embed/_222V3ZmTek"],
    ["31 nəfərlə düşmən mühasirəsində şəhid olan Xaliddin Nəsibov","17.07.2021","https://www.youtube.com/embed/pP9GN2pr2zA"],
    ["Dostlarını xilas edərkən şəhid olan Fərhad Fərhadlı","26.07.2021","https://www.youtube.com/embed/4nbaoajzzhM"],
    ["Murovdağ döyüşlərində şəhid olan mayor Rahib Babayev","05.02.2021","https://www.youtube.com/embed/_y34e9REqKU"],
    ["Rəqsi ilə məşhurlaşan şəhid Fədail Nadirov","09.08.2021","https://www.youtube.com/embed/0kOOKVlsC3Q"],
    ["Oğlunun gözü önündə şəhid olan Müşviq Abbasov","19.08.2021","https://www.youtube.com/embed/2poL8EBxwyI"],
    ["“Canavar” ləqəbli Xüsusi Təyinatlı şəhid İbrahim Məmmədov","28.04.2021","https://www.youtube.com/embed/4-hT74VIONU"],
    ["Dostlarını mühasirədən çıxaran XTQ şəhidi Arif Abbaslı","06.05.2021","https://www.youtube.com/embed/0jKA7Plg5jQ"] 
];
let kod ="";

for (let i = 0; i < info.length; i++) {
    kod += 
    `<div class="col-6 fleft p-relative">
        <img src="./assets/img/videos/${[i]+'.jpg'}" alt="" />
        <div class="modal-toggle d-flex" id="parad">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="176" viewBox="0 0 176 176" fill="none">
                <circle cx="88" cy="88" r="61" fill="white" />
                <circle opacity="0.4" cx="88" cy="88" r="87.5" stroke="white" stroke-dasharray="6 6" />
                <path d="M101 88L80 100L80 76L101 88Z" fill="#918668" />
            </svg>
        </div>
        <span style="display: none;">${info[i][2]}, ${info[i][0]}, ${info[i][1]}</span>
        <p>${info[i][0]}</p>
        <span>${info[i][1]}</span>
    </div>`
    $(".row").html(kod)
}

let h5 = $("#h5")
let iframe = $("iframe")
$(".modal-toggle").click(function () {
  $('.modal').fadeToggle('fast');
  let src = $(this).next('span').html() 
  iframe.attr("src",src.split(",")[0])   
  h5.html(src.split(",")[1]);
});  
$(".close").click(function () {
  $('.modal').fadeToggle('fast');
}); 