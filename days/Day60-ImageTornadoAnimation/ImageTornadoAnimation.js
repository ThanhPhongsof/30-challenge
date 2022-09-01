let images = [
  'url("/img/day-59/img1.jpg")',
  'url("/img/day-59/img2.jpg")',
  'url("/img/day-59/img3.jpg")',
  'url("/img/day-59/img4.jpg")',
  'url("/img/day-59/img5.jpg")',
  'url("/img/day-59/img6.jpg")',
];

function dropImage() {
  let section = document.querySelector("section");
  let drop = document.createElement("span");
  // drop.style.left = Math.random() * innerWidth + "px";
  drop.style.top = Math.random() * innerHeight + "px";

  let bg = images[Math.floor(Math.random() * images.length)];

  let size = Math.random() * 200;
  drop.style.width = 50 + size + "px";
  drop.style.height = 50 + size + "px";
  drop.style.backgroundImage = bg;
  section.appendChild(drop);

  setTimeout(() => {
    drop.remove();
  }, 2000);
}
setInterval(() => {
  dropImage();
}, 100);
