var links = document.getElementById("links");
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");

function openav() {
  first.classList.toggle("one");
  second.classList.toggle("two");
  third.classList.toggle("three");
  links.classList.toggle("show");
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});