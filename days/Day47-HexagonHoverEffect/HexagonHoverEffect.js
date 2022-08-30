const cursor = document.querySelector("#cursor");

console.log(cursor);
window.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
