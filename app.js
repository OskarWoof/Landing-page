// Toggle Navigation Menu
let navToggle = document.querySelector(".nav-toggle");
let links = document.querySelector(".links");

//** */ Sakriva header kad scrolujes **//

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("header").style.top = "0";
//   } else {
//     document.getElementById("header").style.top = "-79px";
//   }
//   prevScrollpos = currentScrollPos;
// };

// navToggle.addEventListener("click", function () {
//   links.classList.toggle("show-links");
// });

// links.addEventListener("click", function () {
//   if (links.classList.contains("show-links")) {
//     links.classList.remove("show-links");
//   }
// });
// $(".nav-toggle").click(function () {
//   // console.log("pritaji se");
//   $(".links").toggleClass("show-links");
// });


$(document).on("click", 'a[href^="#"]', function (e) {
  e.preventDefault();
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 72
      },
      800,
      "linear"
    );
});