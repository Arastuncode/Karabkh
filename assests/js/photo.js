let imgs = [
  ["ŞUŞA", "photo.jpg"],
  ["Heydər Əliyev", "haliyev-2.jpg"],
  ["MƏCBURİ KÖÇKÜNLƏR", "gachgin22-3-1.jpg"],
  ["CƏBRAYIL RAYONU", "cebrayil-xatire.jpeg"],
  ["QUBADLI RAYONU", "qubadli.jpg"],
  ["FÜZULİ RAYONU", "fuzuli-246.jpg"],
  ["XANKƏNDİ 1963-CU İL, BAĞÇA UŞAQLARI GƏZİNTİDƏ", "img-11004.jpeg"],
  ["ŞUŞA, 1968", "img-11005.jpeg"],
  ["XAN QIZI XURŞİDBANU NATƏVANIN SARAY KOMPLEKSİ", "xan.jpeg"],
  ["ŞUŞA TƏBİƏTİ", "susa.jpeg"],
  ["KƏLBƏCƏRDƏ YERLƏŞƏN ŞAHMAT KLUBU 1993-CÜ İL", "kelbecer.jpeg"],
  ["HADRUT 1904-CÜ İL. ÜZEYİR HACIBƏYOV BU MƏKTƏBDƏ MÜƏLLİM İŞLƏYİRDİ","hadrut.jpeg" ],
  ["ŞUŞA. XARI BÜLBÜL FESTİVALI", "xaribulbul.jpeg"],
  ["XANKƏNDİ DÖVLƏT UNİVERSİTETİ", "uni.jpeg"],
  ["ŞUŞA ƏTRAFI VƏ CIDIR DÜZÜ", "jidir-duzu.jpg"],
  ["ƏSGƏRAN QALASI", "askeran.jpg"],
  ["KƏLBƏCƏR", "kalbacarda-korpu.jpg"],
  ["AĞDAM TARİXİ ŞƏKİLLƏR", "agdam-1.jpg"],
  ["ŞUŞA XATİRƏLƏRİM", "img1.jpg"],
  ["CƏBRAYIL TARİXİ ŞƏKİLLƏR", "cabrayil.jpg"],
  ["KƏLBƏCƏR TARİXİ ŞƏKİLLƏR", "slide66.jpg"],
  ["ŞUŞA 1959. HƏRBÇİ ƏLƏSGƏROV ƏNVƏR ÖZ EVİNİN EYVANINDA", "scan-1-1.jpg"],
  ["XALQ ARTİSTİ RASİM BALAYEV 35 İL SONRA AİLƏ ÜZVLƏRİ İLƏ BİRLİKDƏ EYNİ MƏKANDA, EYNİ TƏSVİRDƏ", "rasim-balyev.jpeg"],
  ["QARABAĞ", "fuzuli002.jpg"],
  ["QARABAĞ", "dji0351.jpg"],
];
const imgList = $(".imglist");
let kod = "";
for (let i = 0; i < imgs.length; i++) {
  kod +=
   `
      <a href="./assests/img/photo/${imgs[i][1]}" data-fancybox="group"
        data-caption="${imgs[i][0]}">
        <img src="./assests/img/photo/${imgs[i][1]}" />
      </a>
    `;
}
imgList.html(kod);

// $("[data-fancybox]").fancybox({
//     buttons: ["close"],
//     wheel: false,
//     transitionEffect: "slide",
//     thumbs: false,
//     hash: true,
//     loop: true,
//     keyboard: true,
//     toolbar: true,
//     animationEffect: true,
//     arrows: true,
//     clickContent: true,
// });
