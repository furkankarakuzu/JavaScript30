let countdown;
const timerControls = document.querySelectorAll("[data-time]");
const display = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const confetti = document.querySelector("#confetti");
timerControls.forEach((btn) => btn.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const minutes = this.minutes.value;
  timer(minutes * 60);
  this.reset();
});

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      const confettiSettings = { target: "confetti" };
      const confettiEffect = new ConfettiGenerator(confettiSettings);
      confetti.style.display = "block";
      confettiEffect.render();
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const displayCtx = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  document.title = displayCtx;
  display.textContent = displayCtx;
}

function displayEndTime(time) {
  const end = new Date(time);
  const hour = end.getHours();
  const adjHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjHour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}
