const pyramids = document.querySelector(".pyramids");
const palace = document.querySelector(".palace");
const logo = document.querySelector(".logo");
const nav = document.querySelector("nav");
const info = document.querySelector(".info");

//reveal elements on page loading
window.addEventListener("load", () => {
  pyramids.style.transform = "translateX(0)";
  palace.style.transform = "translateX(0)";
  logo.style.transform = "translateY(0)";
  nav.style.transform = "translateY(0)";

  setTimeout(() => {
    info.style.transform = "translateY(0)";
    info.style.opacity = "1";
  }, 500);
});

//scrolling effects on website elements
window.addEventListener("scroll", () => {
  const scrollVal = window.scrollY;

  pyramids.style.left = scrollVal * -0.25 + "px";
  palace.style.left = scrollVal * 0.25 + "px";
  info.style.marginTop = scrollVal * 1.1 + "px";

  pyramids.style.transition = "0s";
  palace.style.transition = "0s";
  info.style.transition = "0s";
});

//hide and display home info on scrolldown and up
window.onscroll = function () {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    info.style.opacity = "0";
    info.style.transition = "0.6s";
  } else {
    info.style.opacity = "1";
    info.style.transition = "0.6s";
  }
};

var hidden = false;
const toggleModal = () => {
  document.querySelector(".modal").classList.toggle("modal--hidden");
  document.querySelector(".overlay").classList.toggle("overlay--hidden");
  hidden = !hidden;
  if (hidden) {
    document.getElementById("show-modal").style.visibility = "hidden";
  } else {
    document.getElementById("show-modal").style.visibility = "visible";
  }
};
document.querySelector("#show-modal").addEventListener("click", toggleModal);

document.querySelector(".overlay").addEventListener("click", toggleModal);

document
  .querySelector(".modal__close-bar span")
  .addEventListener("click", toggleModal);
document.querySelector(".overlay").addEventListener("click", toggleModal);

// parallax
document.addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".object").forEach(function (move) {
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}
