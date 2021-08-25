console.group("Porcentajes y Descuentos");
// ================ PRECIO / DESCUENTOS / Porcentajes / Ventas =================

// Primer paso: Definir fórmula
// <<<<<< ===>  Precio * (100 - %) / 100   <=== >>>>> => % = Descuento .

// Segundo: Implementar la fórmula en javascript.
// Tercer: Crear las funciones.
// Integrar HTML a Javascipt.

// <<<<<<<<<<<<<<<<<<<<<<<< Part ONE >>>>>>>>>>>>>>>>>>>>> ================ >
// ========== Variables =======
// <<<<<< ===>  Precio * (100 - %) / 100   <=== >>>>> => % = Descuento .
//const precioOriginal = 200;

//const descuento = 25;
// Descuento en porcentaje = ? / 75 > Pagar el usuario del 100%.

//let porcentajePrecioConDescuento = 100 - descuento;
//console.log(porcentajePrecioConDescuento);

//let precioFijo = (precioOriginal * porcentajePrecioConDescuento) / 100;
//console.log(`El precio a pagar: ${precioFijo} pesos`);

console.groupEnd();
// <<<<<<<<<<<<<<<<<<<<<<<< Part TWO >>>>>>>>>>>>>>>>>>>>> ================ >
console.groupEnd("Descuentos y funciones y eventos");
// =======variables =>  Los vamos a cambiar a una función ============

calcularPrecioConDescuento = (precio, descuento) => {
  let porcentajePrecioConDescuento = 100 - descuento;
  console.log(porcentajePrecioConDescuento);
  let precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
};
/* console.log(calcularPrecioConDescuento(500, 15)); */

console.groupEnd();
// <<<<<<<<<<<<<<<<<<<<<<<< Part TWO >>>>>>>>>>>>>>>>>>>>> ================ >
console.group("Formulario / Precio y Descuento");
// <<<< ======== Formulario para descuentos ======== HTML >>>>>>>

// === Variables ===
const btnStart = document.getElementById(`btn`);
console.log(btnStart);

// === Event / function === >
btnStart.addEventListener(`click`, () => {
  console.log("START");
  // llamar => inputPrice >
  const inputPrice = document.getElementById(`inputPrice`);
  const priceValue = inputPrice.value;

  // llamar => inputDiscount >
  const inputDiscount = document.getElementById(`inputDiscount`);
  const discountValue = inputDiscount.value;

  const precioTotal = calcularPrecioConDescuento(priceValue, discountValue);
  // => llamar a párrafo = HTML >
  //==> Lllamar párrafo
  const cash = document.getElementById(`cash`);
  console.log(cash);
  //>
  cash.innerText = `Total: $ ${precioTotal}.00 Dollars`;
  cash.style.color = "red";
  cash.style.fontSize = "1.8rem";
  cash.style.fontWeight = "700";
});

console.groupEnd();
