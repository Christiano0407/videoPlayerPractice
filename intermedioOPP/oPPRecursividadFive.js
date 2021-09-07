console.group("Recursividad");
// >> JSON parse y Strinify >>> No saben trabajr con funcions ==> Por eso la Recursividad.
// >>>> Recursividad = Una función se llama así misma.
// - Puedes llamar a esa misma función (recursiva), pero, ejecutar diferentes resultados.
// - No vayas  a caer en un loop Infinito.
// - Deja de ser recursivo = cuando se llega a un resultado.

// ============================================================================ Recursividad >>>>
//example) ESTRUCTURE>>
/* function recursiva() { */
/*     if( validación) { */
/*         // Llamado recursivo */
/*     }else { */
/*         // Llamados normales, sin recursividad */
/*     } */
/* } */
//recursiva()

// ==========================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// > ciclo >>
/* let numeros = [ */
/*   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, */
/* ]; */
/* let numero = 0; */
/*  */
/* for (let index = 0; index < numeros.length; index++) { */
/*   numero = numeros[index]; */
/*   // Mandamos llamar como objeto> */
/*   console.log({ index, numero }); */
/* } */

// > El ciclo lo vamos a transformar en una función recursiva >
// > Recursividad ==>
// - Le vamos a mandar un Array de números.

let numeros = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let numOne = [0];

function recursiva(numbersArray) {
  if (numbersArray.length != 0) {
    const firstNum = numbersArray[0];
    console.log(firstNum);
    //>method>
    numbersArray.shift();
    //>llamar otra vez a la func>
    recursiva(numbersArray);
  } else {
    console.log("zero");
  }
}

// ==================== Llamar >>
//console.log(recursiva(numOne));
console.log(recursiva(numeros));
console.groupEnd();
// <<<<<<<<<<<<<<<<<<<<<<<< ========================================================================== >>>>>>>>>>>>>>>>>>>>>>>>
console.group("Deep Copy / Recursividad");

// ==================== Llamar >>

console.groupEnd();
