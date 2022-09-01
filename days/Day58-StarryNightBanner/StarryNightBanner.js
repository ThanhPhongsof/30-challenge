function stars() {
  let count = 500;
  let i = 0;
  let scene = document.querySelector(".container");
  while (i < count) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let size = Math.random() * 2;

    let duration = Math.random() * 10;

    star.style.left = `${x + "px"}`;
    star.style.top = `${y + "px"}`;
    star.style.width = `${size + "px"}`;
    star.style.height = `${size + "px"}`;
    star.style.animationDuration = duration + "s";
    scene.appendChild(star);
    i++;
  }
}

function toogleScene() {
  let change = document.querySelector(".container");
  change.classList.toggle("active");
}

stars();
