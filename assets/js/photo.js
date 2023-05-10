let imgs = [
  ["Şuşa", "photo.jpg"],
  ["Heydər Əliyev", "haliyev-2.jpg"],
  ["Məcburi köçkünlər", "gachgin22-3-1.jpg"],
  ["Cəbrayıl rayonu", "cebrayil-xatire.jpeg"],
  ["Qubadlı rayonu", "qubadli.jpg"],
  ["Füzuli rayonu", "fuzuli-246.jpg"],
  ["Xankəndi 1963-Cu il, Bağça Uşaqları Gəzintidə", "img-11004.jpeg"],
  ["Şuşa, 1968", "img-11005.jpeg"],
  ["Xan qızı Xurşidbanu Natəvanın saray kompleksi", "xan.jpeg"],
  ["Şuşa təbiəti", "susa.jpeg"],
  ["Kəlbəcərdə yerləşən şahmat klubu 1993-cü il", "kelbecer.jpeg"],
  ["Hadrut 1904-Cü il. Üzeyir Hacıbəyov bu məktəbdə müəllim içləyirdi","hadrut.jpeg" ],
  ["şuşa. Xari bülbül festi̇vali", "xaribulbul.jpeg"],
  ["Xankəndi̇ Dövlət uni̇versi̇teti̇", "uni.jpeg"],
  ["Şuşa ətrafi və Cıdır düzü", "jidir-duzu.jpg"],
  ["Əsgəran Qalası", "askeran.jpg"],
  ["Kəlbəcər", "kalbacarda-korpu.jpg"],
  ["Ağdam tari̇xi̇ şəki̇llər", "agdam-1.jpg"],
  ["Şuşa xati̇rələri̇m", "img1.jpg"],
  ["Cəbrayil tari̇xi̇ şəki̇llər", "cabrayil.jpg"],
  ["Kəlbəcər tari̇xi̇ şəki̇llər", "slide66.jpg"],
  ["Şuşa 1959. Hərbçi̇ Ələsgərov Ənvər öz evi̇ni̇n eyvaninda", "scan-1-1.jpg"],
  ["Xalq arti̇sti̇ Rasi̇m Balayev 35 i̇l sonra ai̇lə üzvləri̇ i̇lə bi̇rli̇kdə eyni̇ məkanda, eyni̇ təsvi̇rdə", "rasim-balyev.jpeg"],
  ["Qarabağ", "fuzuli002.jpg"],
  ["Qarabağ", "dji0351.jpg"],
];
const imgList = $(".imgList");
let kod = "";
for (let i = 0; i < imgs.length; i++) {
  kod +=
  `<div class="box">
    <a href="./assets/img/photo/${imgs[i][1]}" data-fancybox="group"
      data-caption="${imgs[i][0]}">
      <img src="./assets/img/photo/${imgs[i][1]}" />
    </a>
  </div>`;
}
imgList.html(kod);

let boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mousemove", (e) => {
    let halfWidth = box.clientWidth / 2,
    halfHeight = box.clientHeight / 2,
    mouseX = halfWidth + box.offsetLeft - e.pageX,
    mouseY = halfHeight + box.offsetTop - e.pageY,
    maxDeg = 10,
    image = box.querySelector("img");
    let degX = (mouseY / halfHeight) * -maxDeg + "deg";
    let degY = (mouseX / halfWidth) * maxDeg + "deg";
    box.setAttribute(
      "style",
      `transform: perspective(512px) rotateX(${degX}) rotateY(${degY});`
    );

    image.setAttribute(
      "style",
      `object-position: ${
        (box.offsetLeft + box.clientWidth - e.pageX) / -8 + 20
      }px ${(box.offsetTop + box.clientHeight - e.pageY) / -8 + 20}px`
    );
  });
  box.addEventListener("mouseout", () => {
    box.removeAttribute("style");
    box.querySelector("img").removeAttribute("style");
  });
});
