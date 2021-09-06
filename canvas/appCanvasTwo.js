console.group("Creative Coding");
const canvas = document.getElementById(`canvas1`);
const ctx = canvas.getContext(`2d`);
console.log(canvas);
console.log(ctx);
//>
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//>
// Reescalar cada vez que, se vuelve responsive >
window.addEventListener(`resize`, function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
// === > Mouse
const mouse = {
  //x: null,
  //y: null,
  // undefined => posición será hasta la ejecución. >>
  x: undefined,
  y: undefined,
};

// === > Event
canvas.addEventListener(`click`, function (event) {
  mouse.x = event.x;
  mouse.y = event.y;

  drawCircle();
});
// especie de gusano> mouse>
canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;

  drawCircle();
});

// === >Círculo>
function drawCircle() {
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}
drawCircle();
// ===> Cuadrado>
/* ctx.fillStyle = "#ffffff"; */
/* ctx.fillRect(50, 50, 150, 150); */
console.groupEnd();
