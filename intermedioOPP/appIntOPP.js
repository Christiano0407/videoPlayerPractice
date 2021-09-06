console.group("Intermedio Programación Orientada Objetos");
// <<<<<< Static: Atributos y métodos estáticos en JS >>>>>>
// <<<<<< Palabra reservada: "static" >>>>>

// <<<<<< Instancia de Clase: recuerda "Objeto/object" >>>>>
//>>>>>>>>>
// << Methods static / Método Estático / OBJECTS (keys and values) >>
// Palabra reservada: "keys".
// Palabra reservada: "getOwnPropertyNames".
// Palabra reservada: "entries".
// Palabra reservada: "getOwnPropertyDescriptors".

// << =============================== Variables ======================= >>
// 1) STATIC >
// Atributos > estáticos >>
class Patito {
  // método = sonido>
  static sonido = "Cuak!";
}
// Acceder al atributo sonido >
console.log(Patito.sonido);

//2) static and method
class Perro {
  static SonidoDog() {
    return "Woow!";
  }
}
console.log(Perro.SonidoDog());

// Prototype OBJECT / Instancia de objecto Madre >
// Objeto completo / array >
//3)
const objetito = {
  name: "Alma",
  email: "Al@gmail.com",
  age: 31,
};
// > Nos devuelve una lista (array) con todos nuestros objetos >
// Nombres clave para cada valor>
console.log(Object.keys(objetito));

//4) getOwnPropertyNames
// Devuelve un array con los valosres clave >
const sportWomen = {
  name: "Alma Rosa",
  email: "ros@gmail.com",
  age: 29,
};
console.log(Object.getOwnPropertyNames(sportWomen));

//5) entries
// devuelve un array de arrays (más arrays)
// Divide en arrays
const playMen = {
  name: "Lord89",
  email: "89@gmail.com",
  age: 21,
};
console.log(Object.entries(playMen));

// 6) getOwnPropertyDescriptors
// Devuelve todas las propiedades de nuestro objeto >
// value / writable / configurable / enumerable > Atributos
// Ayuda a limitar el acceso >
// Propiedad del Objeto >>
const marioBros = {
  name: "Mario Bros",
  game: "Mario Nintendo",
};
console.log(Object.getOwnPropertyDescriptors(marioBros));

// << ================= > functions and events

// << ================ > Llamar.

console.groupEnd();
