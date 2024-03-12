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

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Get all navigation links and sections
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".section");

// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
  // Get the current scroll position
  const currentScrollPos = window.scrollY;

  // Loop through each section and check if it's in the viewport
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 0; // Adjust for any header height
    const sectionBottom = sectionTop + section.offsetHeight;

    if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
      // Add a class to the corresponding navigation link to highlight it
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      navLinks[index].classList.add("active");
    }
  });
});
