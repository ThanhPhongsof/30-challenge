const zoomer = document.querySelector(".zoom-image");
const wrapImg = document.querySelectorAll(".zoom-image .image");
const result = document.querySelector(".zoom-image .result");
const size = 2;

wrapImg.forEach((item) => {
  item.addEventListener("mousemove", function (e) {
    result.classList.remove("hide");

    const img = item.querySelector("img");

    let x = (e.offsetX / this.offsetLeft) * 100;
    let y = (e.offsetY / this.offsetHeight) * 100;

    //mouse results
    let posX = e.pageX - zoomer.offsetLeft;
    let posY = e.pageY - zoomer.offsetTop;

    result.style.cssText = `
			background-image: url(${img.src});
			background-size: ${img.width * size}px ${img.height * size}px;
			background-position : ${x}% ${y}%;
			left: ${posX}px;
			top: ${posY}px;
		`;
  });

  item.addEventListener("mouseleave", function (e) {
    result.style = ``;
    result.classList.add("hide");
  });
});
