// Smooth scrolling to sections
const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    const target = document.querySelector(href);
    target.scrollIntoView({ behavior: "smooth" });
  });
});

$(".whatsapp").click(function () {
  alert("click happened");
//   window.location = "www.facebook.com";
  console.log("click happened");
  return false;
});

// $(".whatsapp").on("click", function (event) {
//   event.preventDefault();
//   let url = $(this).data("target");
//   location.replace(url);
// });
