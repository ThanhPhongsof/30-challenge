const signinBtn = document.querySelector("#signin");
const signupBtn = document.querySelector("#signup");
const firstForm = document.querySelector("#form1");
const secondForm = document.querySelector("#form2");
const container = document.querySelector(".container");

signinBtn.addEventListener("click", function (e) {
  container.classList.remove("right-panel-active");
});

signupBtn.addEventListener("click", function (e) {
  container.classList.add("right-panel-active");
});

firstForm.addEventListener("submit", function (e) {
  e.preventDefault();
});
secondForm.addEventListener("submit", function (e) {
  e.preventDefault();
});
