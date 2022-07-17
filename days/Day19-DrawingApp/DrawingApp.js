const color = document.querySelector("#color");
const decrease = document.querySelector("#decrease");
const size = document.querySelector("#size");
const increase = document.querySelector("#increase");
const save = document.querySelector("#save");
const clear = document.querySelector("#clear");
const canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

let Pos1 = {
  x: 0,
  y: 0,
};
let Pos2 = {
  x: 0,
  y: 0,
};

let isDrawing = false;
let colorPain = "#000";
let sizePain = 10;
size.textContent = sizePain;

document.addEventListener("mousedown", function (e) {
  Pos1 = { x: e.offsetX, y: e.offsetY };
  isDrawing = true;
});

document.addEventListener("mousemove", function (e) {
  if (isDrawing) {
    Pos2 = { x: e.offsetX, y: e.offsetY };

    ctx.beginPath();
    ctx.arc(Pos1.x, Pos1.y, sizePain, 0, 2 * Math.PI);
    ctx.fillStyle = colorPain;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(Pos1.x, Pos1.y);
    ctx.lineTo(Pos2.x, Pos2.y);
    ctx.strokeStyle = colorPain;
    ctx.lineWidth = sizePain * 2;
    ctx.stroke();

    Pos1.x = Pos2.x;
    Pos1.y = Pos2.y;
  }
});

document.addEventListener("mouseup", function (e) {
  isDrawing = false;
});

color.addEventListener("change", function (e) {
  colorPain = e.target.value;
});

eraser.addEventListener("click", function (e) {
  colorPain = "#fff";
});

decrease.addEventListener("click", function (e) {
  size -= 5;
  size = size < 5 ? size : 5;
  size.textContent = sizePain;
});

increase.addEventListener("click", function (e) {
  sizePain += 5;
  size = size < 30 ? size : 30;
  size.textContent = sizePain;
});

clear.addEventListener("click", function (e) {
  var canvasStats = canvas.getClientRects()[0];
  ctx.clearRect(0, 0, canvasStats.width, canvasStats.height);
});

save,
  addEventListener("click", function (e) {
    var output = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    save.setAttribute("href", output);
  });
