// Select elements
let video = document.querySelector(".viewer");
let toggleBtn = document.querySelector(".toggle");
const skipBtns = document.querySelectorAll("[data-skip]");
const sliders = document.querySelectorAll(".player__slider");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");

// Video controller actions
video.addEventListener("click", videoActions);
video.addEventListener("timeupdate", handleProgress);
toggleBtn.addEventListener("click", videoActions);
skipBtns.forEach((el) => el.addEventListener("click", skips));
sliders.forEach((el) => el.addEventListener("change", videoRangesUpdate));
sliders.forEach((el) => el.addEventListener("mousemove", videoRangesUpdate));
let looper = false;
progress.addEventListener("click", scrup);
progress.addEventListener("mousemove", (e) => looper && scrup(e));
progress.addEventListener("mouseup", () => (looper = false));
progress.addEventListener("mousedown", () => (looper = true));
// Functions
function skips() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function videoActions() {
  let action = video.paused ? "play" : "pause";
  let icon = video.paused ? "❚ ❚" : "►";
  video[action]();
  toggleBtn.innerHTML = icon;
}

function videoRangesUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  let time = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${time}%`;
}

function scrup(e) {
  let scrup = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrup;
}
