const cardImg = document.querySelector(".card__img");
const cardHeading = document.querySelector(".card__info h2");
const cardContent = document.querySelector(".card__info p");
const cardBtn = document.querySelector(".card__info button");

setTimeout(() => {
  cardImg.innerHTML =
    '<img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"></img>';
  cardHeading.innerHTML = "BongBong";
  cardContent.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat quae qui, laboriosam neque necessitatibus provident dolore iure porro ex error alias explicabo numquam animi libero debitis illum fuga temporibus!";
  cardBtn.innerHTML = "Read More";

  document.querySelectorAll(".loading").forEach((item) => {
    item.classList.remove("loading");
  });
}, 3000);
