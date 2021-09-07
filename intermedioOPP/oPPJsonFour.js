console.group("JSON Parse / Json Stringify");
//>> JSON.parse = analiza una cadena de texto como JSON, transformando opcionalmente  el valor producido por el análisis.
// El método JSON.parse() analiza una cadena de texto (string) como JSON, transformando opcionalmente el valor producido por el análisis.
//>> JSON.stringify =  convierte un objeto o valor de JavaScript en una cadena de texto JSON, opcionalmente reemplaza valores si se indica una función de reemplazo, o si se especifican las propiedades mediante un array de reemplazo.
// El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena JSON, reemplazando opcionalmente valores si se especifica una función de reemplazo u opcionalmente incluyendo solo las propiedades especificadas si se especifica una matriz de reemplazo.

// =================================================================================== >>>
const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
};

// Objeto a string >
const stringContext = JSON.stringify(obj1);
// De un String a un Objeto >
// Tomamos como base el "string" de "obj2", para convertir a un objeto (JSON) >
const objNew = JSON.parse(stringContext);
// ============================= Llamar >
console.log(obj1);
// >
console.log(stringContext);
// >
console.log(objNew);

console.groupEnd();
