console.group("Creative Coding");
const canvas = document.getElementById(`canvas1`);
const ctx = canvas.getContext(`2d`);
console.log(canvas);
console.log(ctx);
//>
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particleArray = [];
let hue = 0;
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

  // click => Aparecer las partículas >
  for (let index = 0; index < 10; index++) {
    particleArray.push(new Particle());
  }
});
// especie de gusano> mouse>
canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
  //drawCircle();

  // click => Aparecer las partículas >
  for (let index = 0; index < 10; index++) {
    particleArray.push(new Particle());
  }
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
    //this.x = Math.random() * canvas.width;
    //this.y = Math.random() * canvas.height;

    this.size = Math.random() * 10 + 1;
    this.speedX = Math.random() * 1.5 - 1.5;
    this.speedY = Math.random() * 1.5 - 1.5;
    this.color = `hsl( ` + hue + `, 100%, 50%)`; // Transformar el color>
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = this.color;
    //ctx.strokeStyle = "#ffffff";
    //ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    //ctx.stroke();
  }
}

// ==> Iniciar las particle >
/* init = () => { */
/*   for (let i = 0; i < 100; i++) { */
/*     particleArray.push(new Particle()); */
/*   } */
/* }; */
/* init(); */
//console.log(particleArray);

//==> index = i; ==>
function handleParticles() {
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
    particleArray[i].draw();

    // distance between i / j / and hipotemusa>
    for (let j = i; j < particleArray.length; j++) {
      const dx = particleArray[i].x - particleArray[j].x;
      const dy = particleArray[i].y - particleArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = particleArray[i].color;
        ctx.lineWidth = particleArray[i].size / 5;
        ctx.moveTo(particleArray[i].x, particleArray[i].y);
        ctx.lineTo(particleArray[j].x, particleArray[j].y);
        ctx.stroke();
        ctx.closePath();
      }
    }
    if (particleArray[i].size <= 0.3) {
      particleArray.splice(i, 1); //delete / replace => splice.
      //console.log(particleArray.length);
      i--;
    }
  }
}

// ==> función animación >>
animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //ctx.fillStyle = `rgba(0,0,0,0.02)`;
  //ctx.fillRect(0, 0, canvas.width, canvas.height);
  //drawCircle();
  handleParticles();
  hue += 2;
  requestAnimationFrame(animate);
};
animate();

// ===> Cuadrado>
/* ctx.fillStyle = "#ffffff"; */
/* ctx.fillRect(50, 50, 150, 150); */
console.groupEnd();
