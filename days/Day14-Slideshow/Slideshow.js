window.addEventListener("load", function () {
  const slider = document.querySelector(".slider");
  const sliderMain = document.querySelector(".slider-main");
  const sliderItem = document.querySelectorAll(".slider-item");
  const dotItem = document.querySelectorAll(".slider-dot-item");

  const nextBtn = document.querySelector(".slider-next");
  const nextPrev = document.querySelector(".slider-prev");

  const sliderItemWidth = sliderItem[0].offsetWidth;
  const slidersLength = sliderItem.length;
  let positionX = 0;
  let index = 0;
  nextBtn.addEventListener("click", function () {
    handleChangeSlide(1);
  });
  nextPrev.addEventListener("click", function () {
    handleChangeSlide(-1);
  });
  [...dotItem].forEach((item) =>
    item.addEventListener("click", function (e) {
      [...dotItem].forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");

      const slideIndex = parseInt(e.target.dataset.index);
      index = slideIndex;
      positionX = -1 * index * sliderItemWidth;

      sliderMain.style = `transform:translateX(${positionX}px)`;
    })
  );

  function handleChangeSlide(direction) {
    if (direction === 1) {
      if (index >= slidersLength - 1) {
        index = slidersLength - 1;
        return;
      }
      positionX -= sliderItemWidth;
      index++;
    } else if (direction === -1) {
      if (index <= 0) {
        index = 0;
        return;
      }
      positionX += sliderItemWidth;
      index--;
    }

    sliderMain.style = `transform:translateX(${positionX}px)`;
    [...dotItem].forEach((el) => el.classList.remove("active"));
    dotItem[index].classList.add("active");
  }
});
