console.group("Image Style Animation");
// <<<< Traer / convertir la imagen >>>>
const myImage = new Image();
// << ======================================== VARIABLES ============================================ >>
// Traer canvas ===>
/* const canvas = document.getElementById(`canvas1`); */
/* console.log(canvas); */
/*  */
/* const ctx = canvas.getContext(`2d`); */
/* console.log(ctx); */
/* //>>> Invocar medidas >> */
/* canvas.width = 400; */
/* canvas.height = 800; */
/* //>>> Aparecer la imagen en web >> */
/* ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height); */
// >>>>
//>>> Cargar image>
myImage.addEventListener(`load`, function () {
  const canvas = document.getElementById(`canvas1`);
  const ctx = canvas.getContext(`2d`);

  canvas.width = 400;
  canvas.height = 600;

  ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);

  //pexelsImg>
  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //rect >forma>
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //console.log(pixels);

  // Particles>>>
  let particlesArray = [];
  // numero de partículas =>
  const numberOfParticles = 5000;
  //>
  let mappedImage = [];
  //> Mapeo / position "Y", vertical / X (Horizontal) >>
  // Posición partículas en "Y" y "x".
  for (let y = 0; y < canvas.height; y++) {
    let row = [];
    for (x = 0; x < canvas.width; x++) {
      // datos de pixels / color>>
      const red = pixels.data[y * 4 * pixels.width + x * 4];
      const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
      const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
      const brightness = calculateRelativeBrightness(red, green, blue);
      const cell = [(cellBrightness = brightness)];

      row.push(cell);
    }

    mappedImage.push(row);
  }
  console.log(mappedImage);

  // function colors / calcular >>
  function calculateRelativeBrightness(red, green, blue) {
    return (
      Math.sqrt(
        red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114
      ) / 100
    );
  }

  // Construir la base con Partículas >>>>>>
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width; //Ancho
      this.y = 0; //alto
      this.speed = 0; //aceleración
      this.velocity = Math.random() * 0.5; //velocidad
      this.size = Math.random() * 1.5 + 1; //tamaño
      this.position1 = Math.floor(this.y); // position Y
      this.position2 = Math.floor(this.x); // position x
    }
    //> Methods>>
    //descarga
    update() {
      this.position1 = Math.floor(this.y); // position Y
      this.position2 = Math.floor(this.x); // position x
      this.speed = mappedImage[this.position1][this.position2][0];
      // move>
      let movement = 2.5 - this.speed + this.velocity;
      //>
      this.y += movement;

      if (this.y >= canvas.height) {
        this.y = 0;
        this.x = Math.random() * canvas.width;
      }
    }
    // pintar/canvas
    draw() {
      ctx.beginPath();
      ctx.fillStyle = "#ffffff";
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  //> Functions / events >
  function init() {
    for (let index = 0; index < numberOfParticles; index++) {
      particlesArray.push(new Particle());
    }
  }
  init();

  function animate() {
    //ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height); //se vea la imagen / transparente la imagen >
    ctx.globalAlpha = 0.05;
    (ctx.fillStyle = `rgb(0, 0, 0)`),
      ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      ctx.globalAlpha = particlesArray[i].speed * 0.5; // Máscara para la imagen y partículas >
      particlesArray[i].draw();
    }
    // llamar la animation / invocar
    requestAnimationFrame(animate);
  }
  //animate();
});

console.groupEnd();