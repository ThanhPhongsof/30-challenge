const animationElements = document.querySelectorAll(".show-on-scroll");

function toggleAnimationElementInWindow(element) {
  const rect = element.getClientRects();
  const heightScreen = window.innerHeight;
  if (!(rect[0].bottom < 0 || rect[0].top > heightScreen)) {
    // ben trong thi vao day
    element.classList.add("start");
  } else {
    // ben ngoai thi vao day
    element.classList.remove("start");
  }
}

function checkAnimation() {
  animationElements.forEach((element) =>
    toggleAnimationElementInWindow(element)
  );
}

window.onscroll = checkAnimation;
