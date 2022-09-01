let video = document.querySelector("#video");
setInterval(() => {
  video.currentTime = window.pageYOffset / 1000;
}, 100);
