const searchBtn = document.querySelector(".search-box-btn");
searchBtn.addEventListener("click", function (e) {
  this.parentNode.classList.toggle("open");
  this.previousElementSibling.focus();
});
