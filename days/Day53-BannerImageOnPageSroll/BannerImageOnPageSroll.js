const side1 = document.querySelector("#side1");
const side2 = document.querySelector("#side2");

window.addEventListener("scroll", function () {
  side1.style.left = -+window.pageYOffset + "px";
  side2.style.left = +window.pageYOffset + "px";
});
