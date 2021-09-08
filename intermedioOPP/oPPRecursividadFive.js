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
// > Copoia profunda y superficial en Javascript >>
// > A menudo, para crear una copia exacta de un objeto en JavaScript, necesitamos crear un nuevo Objeto a partir de objetos existentes.
// > una copia superficial tiene datos comunes compartidos entre la copia y el original, mientras que la copia profunda de un objeto no tiene datos compartidos.
// > Un objeto se puede considerar como copia superficial cuando se asigna una copia separada de las propiedades del tipo de valor de nivel superior al nuevo objeto y las propiedades que representan un objeto se copian por referencia a la carpeta de destino.

// > Type Of => Validar el tipo de dato.

const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
};

//> Validar si es un Objeto y Array >>>>> 2)
// Object
// > subject => Parámetro (recibe)>>
function isObject(subject) {
  // Validar "typeOf" subject es un objeto.
  return typeof subject === "object";
}
// Array
function isArray(subject) {
  // Super prototype (Array)
  // método estático (.isArray)

  return Array.isArray(subject);
}

//> DeepCopy>>> 1)
function deepCopy(subject) {
  let copySubject;
  // Validar si es true or false>
  const subjectIsArray = isArray(subject);

  const subjectIsObject = isObject(subject);

  // Condicionasl para ayudar a validar >>>>
  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    // Retun en caso de no tener ni un objeto y un array >>>>
    return subject;
  }
  // Ciclo for() > Para iterar por cada uno de nuestro subject >>>>
  for (key in subject) {
    // Validar si la propiedad es un objeto >
    const keyIsObject = isObject(subject[key]);
    // key es true >
    if (keyIsObject) {
      //copySubject[key] = deepCopy(subject[key]);
    } else {
      // No es un objeto  => Pero es otra cosa ==>
      // Pregunar si es un ArraY>
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}
// Validar nuestra copia>>
const obj2 = deepCopy(obj1);
// ==================== Llamar >>
console.log(obj1);
console.log(obj2);

console.groupEnd();
