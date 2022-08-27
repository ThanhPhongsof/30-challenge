const checbox = document.querySelector("#checkbox");
const professional = document.querySelector("#professional");
const master = document.querySelector("#master");
const basic = document.querySelector("#basic");

checbox.addEventListener("click", function () {
  basic.textContent = basic.textContent === "$199.99" ? "$19.99" : "$199.99";
  professional.textContent =
    professional.textContent === "$249.99" ? "$24.99" : "$249.99";
  master.textContent = master.textContent === "$399.99" ? "$39.99" : "$399.99";
});
