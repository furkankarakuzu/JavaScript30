const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 75;
let coordX = 0;
let coordY = 0;
let hue = 0;

function drawing(e) {
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  ctx.beginPath();
  ctx.moveTo(coordX, coordY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  coordX = e.offsetX;
  coordY = e.offsetY;
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
}

canvas.addEventListener("mousemove", (e) => {
  isDraw = true;
  coordX = e.offsetX;
  coordY = e.offsetY;
});

canvas.addEventListener("mousemove", drawing);
