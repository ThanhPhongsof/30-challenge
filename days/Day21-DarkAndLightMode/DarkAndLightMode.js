const switchToggle = document.querySelector("#switch");

switchToggle.addEventListener("change", (e) => {
  document.body.classList.toggle("dark");
});
