const imageList = [
  "https://images.unsplash.com/photo-1475809913362-28a064062ccd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1463501810073-6e31c827a9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80",
  "https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1585750130716-42e238075a88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=&w=1350&q=80",
  "https://images.unsplash.com/photo-1599069446175-e8ee7e59fe79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=&w=1350&q=80",
  "https://images.unsplash.com/photo-1620138546344-7b2c38516edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=&w=1350&q=80",
];

window.addEventListener("load", function () {
  const wrapper = document.querySelector(".wrapper");
  imageList.forEach((item, index) => renderImage(item, index));

  function renderImage(item, index) {
    const template = `
    <div class="wrapper-image" data-index="${index}">
      <img src="${item}"/>
    </div>  
    `;
    wrapper.insertAdjacentHTML("beforeend", template);
  }

  wrapper.addEventListener("click", function () {
    const wrapperImage = document.querySelectorAll(".wrapper-image");
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderDot = document.querySelector(".slider-dots");

    function renderSlider(item, index) {
      const templateDots = `
        <li class="slider-dot-item" data-index="${index}"></li>
      `;

      const templateSlider = `
      <div class="slider-item">
        <img src="${item}" alt="" />       
      </div> 
      `;

      sliderDot.insertAdjacentHTML("beforeend", templateDots);
      sliderMain.insertAdjacentHTML("beforeend", templateSlider);
    }

    imageList.forEach((item, index) => renderSlider(item, index));

    slider.classList.add("show");
    document.querySelector(".slider-overlay").classList.add("is-active");

    function Slider() {
      this.slider = document.querySelector(".slider");
      this.sliderMain = document.querySelector(".slider-main");
      this.sliderItem = document.querySelectorAll(".slider-item");
      this.dotItem = document.querySelectorAll(".slider-dot-item");
      this.sliderOverlay = document.querySelector(".slider-overlay");

      this.nextBtn = document.querySelector(".slider-next");
      this.prevBtn = document.querySelector(".slider-prev");
      this.removeBtn = document.querySelector(".slider-remove");

      sliderItemWidth = this.sliderItem[0].offsetWidth;
      slidersLength = this.sliderItem.length;

      this.positionX = 0;
      this.index = 0;
      this.nextBtn.addEventListener("click", () => {
        this.handleChangeSlide(1);
      });

      this.prevBtn.addEventListener("click", () => {
        this.handleChangeSlide(-1);
      });

      [...this.dotItem].forEach((item) =>
        item.addEventListener("click", (e) => this.handleChangeDots(e))
      );

      this.removeBtn.addEventListener("click", () => {
        console.log("click");
        this.slider.classList.remove("show");
        this.sliderOverlay.classList.remove("is-active");
      });
    }
    new Slider();
    Slider.prototype.handleChangeDots = function (e) {
      [...this.dotItem].forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");

      sliderIndex = +e.target.dataset.index;
      this.index = sliderIndex;
      this.positionX = -1 * this.index * sliderItemWidth;

      this.sliderMain.style = `transform:translateX(${this.positionX}px)`;
    };

    Slider.prototype.handleChangeSlide = function (direction) {
      if (direction === 1) {
        if (this.index >= slidersLength - 1) {
          this.index = slidersLength - 1;
          return;
        }
        this.positionX -= sliderItemWidth;
        this.index++;
      } else if (direction === -1) {
        if (this.index <= 0) {
          this.index = 0;
          return;
        }
        this.positionX += sliderItemWidth;
        this.index--;
      }

      this.sliderMain.style = `transform:translateX(${this.positionX}px)`;
      [...this.dotItem].forEach((el) => el.classList.remove("active"));
      this.dotItem[this.index].classList.add("active");
    };
  });
});
