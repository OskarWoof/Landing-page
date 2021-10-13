// Toggle Navigation Menu
let navToggle = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

links.addEventListener("click", function () {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  }
});



