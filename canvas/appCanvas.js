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

// Function / animation / loop
// = VAR=
let size = 0;
let positionX = 0;

//Func/event
function animate() {
  //draw each frame
  //limpiar/ medidas principio
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Method>
  size += 0.05;
  positionX += 0.1;

  ctx.fillStyle = "Red";
  ctx.lineWidth = 5;
  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.arc(positionX, 300, size, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  ctx.stroke();
  //Petición a la animación a ejecutar ----
  requestAnimationFrame(animate);
}
//animate();

// ===== >
console.log(canvas);
console.log(ctx);
console.groupEnd();
