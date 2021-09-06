console.group("Creative Coding");
const canvas = document.getElementById(`canvas1`);
const ctx = canvas.getContext(`2d`);
console.log(canvas);
console.log(ctx);
//>
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particleArray = [];
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
  // active function >
  //drawCircle();
});
// especie de gusano> mouse>
canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;

  //drawCircle();
});

// === >Círculo>
/* function drawCircle() { */
/*   ctx.fillStyle = "#ffffff"; */
/*   //ctx.strokeStyle = "#ffffff"; */
/*   ctx.lineWidth = 5; */
/*   ctx.beginPath(); */
/*   ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2); */
/*   ctx.fill(); */
/*   //ctx.stroke(); */
/* } */
//drawCircle();

// >>> Class (methods) / particles (create) >>>
class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random * 5 + 1;
    this.speedX = Math.random() * 1.5 - 1.5;
    this.speedY = Math.random() * 1.5 - 1.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw() {
    ctx.fillStyle = "#ffffff";
    //ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
    ctx.fill();
    //ctx.stroke();
  }
}

// ==> Iniciar las particle >
init = () => {
  for (let i = 0; i < 100; i++) {
    particleArray.push(new Particle());
  }
};

// ==> función animación >>
animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //drawCircle();
  requestAnimationFrame(animate);
};
animate();

// ===> Cuadrado>
/* ctx.fillStyle = "#ffffff"; */
/* ctx.fillRect(50, 50, 150, 150); */
console.groupEnd();
