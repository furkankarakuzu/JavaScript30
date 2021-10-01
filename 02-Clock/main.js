const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegree = (seconds / 60) * 360 + 90;
  second.style.transform = `rotate(${secondDegree}deg)`;

  const minutes = now.getMinutes();
  const minuteDegree = (minutes / 60) * 360 + 90;
  minute.style.transform = `rotate(${minuteDegree}deg)`;

  const hours = now.getHours();
  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  }
  const hourDegree = (hours / 12) * 360 + 90;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval("setDate()", 100);
