console.group("Moda");
// ===== MODA ====
// => Elemento que más se repite <=

//1) List / Invocar a la funciones ============= >
const list1 = [
  1, 2, 3, 2, 3, 1, 1, 3, 2, 1, 3, 2, 2, 1, 3, 4, 1, 5, 5, 1, 4, 5, 4, 3, 5, 4,
];

// Array a Objeto =>
const list1Count = {};

// = Method .map() => Método para recorrer el array ====== >>>>>>>
// === El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
// ====> Elemento = e => los números <<<
list1.map(function (e) {
  if (list1Count[e]) {
    list1Count[e] += 1;
  } else {
    list1Count[e] = 1;
  }
});

// 2) <<<<<<< Ahora, convertir el objeto otra vez a un array ====== >>>>>>>
// ===== const list1Array = Object.entries(list1Count); = El método Object.entries() devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado, en el mismo orden que es proporcionado
// ===== método sort() == para iterar y buscar / Agregar número === > El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor

const list1Array = Object.entries(list1Count).sort(function (
  acumulatorValue,
  newValue
) {
  /*  if(acumulatorValue > newValue) return 1;  */
  /*  if(acumulatorValue ===  newValue) return 0;  */
  /*  if(acumulatorValue < newValue) return -1;  */

  return acumulatorValue[1] - newValue[1];
});

// 4) ===== Moda ======= >
const moda = list1Array[list1Array.length - 1];

// => ValorAcumulado y nuevoValor <=
// ======================== > Lllamar ======================= <<<<
console.log(list1);
console.log(list1Count);
console.log(list1Array);
console.log(moda);

// Objeto a array =>
console.groupEnd();
