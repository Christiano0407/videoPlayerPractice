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
//== Cuadrado Buttons ==>
const btnPerCua = document.getElementById(`btnPerCua`);
console.log(btnPerCua);
const btnArCua = document.getElementById(`btnArCua`);
console.log(btnArCua);

//== Triángulo Buttons ==>
const btnPerTri = document.getElementById(`btnPerTri`);
console.log(btnPerTri);
const btnArTri = document.getElementById(`btnArTri`);
console.log(btnArTri);
//== Círculo Buttons ==>
const btnPerCir = document.getElementById(`btnPerCir`);
console.log(btnPerCir);
const btnArCir = document.getElementById(`btnArCir`);
console.log(btnArCir);

// == Functions / Events === >

// = Paraámetro / HTML / cuadrado ============================== >
// << Función para calcular el perímetro >>
const btnTextPar = document.getElementById(`perTextCuad`);
console.log(btnTextPar);
const btnTextAr = document.getElementById(`arTextCuad`);
console.log(btnTextAr);
// === >
lados = (number) => {
  return number * 4;
};
lados();
//== >
btnPerCua.addEventListener(`click`, () => {
  // => Obtenemos el valor <=
  const labelCuad = document.getElementById(`inCuadrado`);
  const value = labelCuad.value;

  let perimeterCua = lados(value);

  console.log(perimeterCua);
  // == Agregar a HTML ==>
  btnTextPar.textContent = ` Perimeter: ${perimeterCua}`;
  btnTextPar.style.fontSize = "1.6rem";
  btnTextPar.style.color = "red";
  btnTextPar.style.fontWeight = "500";
});

// == AREA ==>
areaLados = (number) => {
  return (number * number) / 2;
};
areaLados();

btnArCua.addEventListener(`click`, () => {
  const labelCuad = document.getElementById(`inCuadrado`);
  const value = labelCuad.value;

  let areaCuadrado = areaLados(value);
  console.log(areaCuadrado);

  arTextCuad.textContent = `Area: ${areaCuadrado}`;
  arTextCuad.style.fontSize = "1.6rem";
  arTextCuad.style.fontWeight = "500";
  arTextCuad.style.color = "#000000";
});

// = Paraámetro / HTML / Triángulo ============================= >

console.groupEnd();
