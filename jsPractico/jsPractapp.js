console.group("Practice Js / Figure Geometric");
// Figuras Geométricas ============== >

//  => Parámetro / área / Radio / Diámetro. =>

// == Cuadrado:
console.log("Cuadrado");
const ladoCuadrado = 10;

// = Parametro = >
cuadradoParametro = () => {
  return ladoCuadrado * 4;
};
// = result =>
console.log(cuadradoParametro());

// == área == >
const areaCuadrado = (ladoCuadrado * ladoCuadrado) / 2;
console.log(`Es el área total del cuadrado: ${areaCuadrado}cm`);

// == Triángulo
let ladoA = 20;
let ladoB = 10;
let ladoC = +ladoB;
//console.log(ladoC);
// => Perímetro ==> lado + lado + lado.
parameter = () => {
  let param = ladoA + ladoB + ladoC;
  console.log(`Parameter: ${param}`);
};

// == Area => Base por altura / 2 =>
area = () => {
  let calcArea = (ladoA * ladoB) / 2;
  console.log(calcArea);
};

parameter();
area();

// == Círculo === > Radio y Circunferencia === >
let radioCir = 4;
let diametroCir = +radioCir * 2;
//console.log(diametroCir);
const piRadio = Math.PI;

// == CIRCUNFERENCIA (CALC) =>
circPerim = () => {
  let circunferenciaCir = diametroCir * piRadio;
  console.log(circunferenciaCir);
};

// == Diameter (Calc) == >
diameterCir = () => {
  let diameter = piRadio * diametroCir * 2;
  console.log(diameter);
};

circPerim();
diameterCir();

console.groupEnd();
// <<<<<<< ====================== Part Two =================== >>>>
console.group("Practice Calculate Two / Interactuando desde HTNL");
// === Interactuando HTML ====== >

console.groupEnd();
