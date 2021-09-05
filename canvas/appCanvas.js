console.group("CANVAS");
// Fibonaci > 1+2 =3 / 2+3 = 5/ 3+5=8/ 5+8=13 ================>
//CCANVAS
const canvas = document.getElementById(`canvas1`);
//CONTEXT => 2D or 3d (webgl)
const ctx = canvas.getContext(`2d`);
// Window / Browser
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = `destination-over`;

//< ========================= path / pintar ===================================== >
//<<<< Círculo>>>>>>
//ctx.fillStyle = "Red";
//ctx.lineWidth = 5;
//ctx.strokeStyle = "blue";

// <<<< comenzar>>>>>>
//ctx.beginPath();
// Redondo / ángulo>
// ==== largo/radio/ancho/mitad (propiedades)>
//ctx.arc(150, 300, 50, 0, Math.PI * 2);
// Cerrar>
//ctx.closePath();
// color>
//ctx.fill();
// Línea / borde
//ctx.stroke();

// Cuadrado>>>>>>
//ctx.fillRect(200, 100, 100, 100);

// ====== Function / Events ======
// === VAR/let/const ====
//let size = 20;
/* let positionX = canvas.width / 2; */
/* let positionY = canvas.height / 2; */
/* let angle = 0; */

let number = 0;
let scale = 10;

// funct draw flowers >>>>>>>>>
function drawFlowers() {
  // Movimiento de flor >>
  let angle = number * 1;
  let radius = scale * Math.sqrt(number);
  let positionX = radius * Math.sin(angle) + canvas.width / 2;
  let positionY = radius * Math.cos(angle) + canvas.height / 2;

  //style js
  ctx.fillStyle = "#fff";
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#000";
  ctx.beginPath();
  ctx.arc(positionX, positionY, 10, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // <ACTIVE number>>
  //number++;
}

//Func/event animation >>>>>>>>>
function animate() {
  //draw each frame
  //limpiar/ medidas principio>>
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Method>>
  //size += 0.05;
  /* positionX += 5 * Math.sin(angle); */
  /* positionY += 5 * Math.cos(angle); */
  /* angle += 0.1; */

  // Llamar a drawFlower>>>
  drawFlowers();
  //Petición a la animación a ejecutar >>>
  requestAnimationFrame(animate);
}

// < ===================== Invocar ============================= >
//drawFlowers();
animate();

// ===== >
console.log(canvas);
console.log(ctx);
console.groupEnd();
