// let navToggle = document.querySelector(".nav-toggle");
// let links = document.querySelector(".links");
// let secLinks = document.querySelectorAll("section");

// navToggle.addEventListener("click", function () {
//   links.classList.toggle("show-links");
// });

// links.addEventListener("click", function () {
//   if (links.classList.contains("show-links")) {
//     links.classList.remove("show-links");
//   }
// });

// console.log(secLinks);

$(document).on("click", 'a[href^="#"]', function (e) {
  e.preventDefault();
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 72,
      },
      800,
      "linear"
    );
});
