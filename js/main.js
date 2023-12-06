// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
let header = document.getElementById("header");

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  header.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
    header.classList.remove("active");
  }
};
// menu end
// scroll start
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
const priceCheck = document.getElementById("priceCheck");
if (priceCheck) {
  const paymentItems = document.querySelectorAll(".paymentItem__content");
  priceCheck.onchange = () => {
    paymentItems.forEach((paymentItems) => {
      paymentItems.classList.toggle("active");
    });
  };
}

// wow start
var wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: 0,
  mobile: true,
  live: true,
  scrollContainer: null,
  resetAnimation: true,
});
wow.init();
// wow end
