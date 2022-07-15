const listCounter = document.querySelectorAll(".counter");

listCounter.forEach((item) => {
  CounterUp(item);
});

function CounterUp(element) {
  const numberElement = element.querySelector(".number");
  const to = +numberElement.innerText;
  let count = 0;
  let time = 144;
  const step = to / time;

  let counting = setInterval(() => {
    count += step;
    if (count >= to) {
      clearInterval(counting);
      element.innerText = to;
    } else {
      element.innerText = Math.round(count);
    }
  }, 50);
}
