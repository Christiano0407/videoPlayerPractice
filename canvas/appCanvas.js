console.group("CANVAS");
// Fibonaci > 1+2 =3 / 2+3 = 5/ 3+5=8/ 5+8=13 ================>
//CCANVAS
const canvas = document.getElementById(`canvas1`);
//CONTEXT => 2D or 3d (webgl)
const ctx = canvas.getContext(`2d`);
// Window / Browser
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
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
let size = 0;
let positionX = 0;
let positionY = 0;

// funct draw flowers >>>>>>>>>
function drawFlowers() {
  ctx.fillStyle = "Red";
  ctx.lineWidth = 5;
  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.arc(positionX, positionY, size, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  ctx.stroke();
}

//Func/event animation >>>>>>>>>
function animate() {
  //draw each frame
  //limpiar/ medidas principio
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Method>
  size += 0.05;
  positionX += 0.5;
  positionY += 0.5;
  // Llamar a drawFlower
  drawFlowers();
  //Petición a la animación a ejecutar ----
  requestAnimationFrame(animate);
}

// < ===================== Invocar ============================= >
//drawFlowers();
//animate();

// ===== >
console.log(canvas);
console.log(ctx);
console.groupEnd();
