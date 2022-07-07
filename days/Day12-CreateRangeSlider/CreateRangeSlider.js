var range = document.querySelector(".range");
var process = document.querySelector(".process");
var value = document.querySelector(".process span");

range.addEventListener("mousemove", function (e) {
  var processWidth = e.pageX - this.offsetLeft;
  var percent = (processWidth / this.offsetWidth) * 100;
  percent = Math.round(percent);
  console.log(percent);
  updateProcess(percent);
});

function updateProcess(percent) {
  process.style.width = `${percent}%`;
  value.innerHTML = `${percent}%`;
}

updateProcess(30);
