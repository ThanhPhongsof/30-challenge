const player = document.querySelector(".player");
const video = player.querySelector(".player-video");
const progress = player.querySelector(".player-progress");
const progressBar = player.querySelector(".player-progress-filled");

const toogle = player.querySelector(".toogle");
const skipButtons = player.querySelectorAll("[data-skip]");
const volume = player.querySelector(".player-volume input");
const time = player.querySelector(".player-time");

// handle play - pause video
const tooglePlay = () => {
  if (video.paused) {
    video.play();
    toogle.innerHTML = "<i class='fa-solid fa-pause' aria-hidden='true'></i>";
  } else {
    video.pause();
    toogle.innerHTML = "<i class='fa-solid fa-play' aria-hidden='true'></i>";
  }
};

// handle process time
const handleProcessTime = () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent}%`;

  time.innerHTML = `${formatTime(video.currentTime)} / ${formatTime(
    video.duration
  )}`;
};

const scrub = (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
};

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);
  let minuteValue, secondValue;

  minuteValue = minutes < 10 ? "0" + minutes : minutes;
  secondValue = seconds < 10 ? "0" + seconds : seconds;

  return minuteValue + ":" + secondValue;
}

toogle.addEventListener("click", tooglePlay);
video.addEventListener("click", tooglePlay);

video.addEventListener("timeupdate", handleProcessTime);

volume.addEventListener("change", function () {
  video.volume = this.value;
});

progress.addEventListener("click", scrub);

skipButtons.forEach((button) =>
  button.addEventListener("click", function () {
    video.currentTime += +this.dataset.skip;
  })
);
