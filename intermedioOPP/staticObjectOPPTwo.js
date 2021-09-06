console.group("Métodos Estáticos del Prototipo Object / Objeto");
// <<<< Métodos Estáticos del Prototipo Object / Objeto >>>>
// > Super Protoype Object >> Object (estatic).
// Instancia del Objeto y Array >

// Method(parámetro)>>
// >
const person = {
  //Properties>
  name: "Luisa",
  age: 31,
  work: "Journalist",
  approveCourses: ["Curso1"],
  //method(parameters)>
  addCourse(newCourse) {
    this.approveCourses.push(newCourse);
    // ¿Qué es This ? >
    console.log("this", this);
    console.log("approve", this.approveCourses);
  },
};
console.log(person);
// Object > Propiedades estáticas ============ >
//> array con cada una de las propiedades >>
console.log(Object.keys(person));
console.log(Object.getOwnPropertyNames(person));
person.addCourse("Curso 2");
person.addCourse("Curso 3");
// Listas de Array del Array >>
console.log(Object.entries(person));
// Acceder a la info del array >
console.log(Object.entries(person)[2]);
console.log(Object.entries(person)[2][1]);
// Instancia de Objeto (parámetros) / diferentes atributos >>
console.log(Object.getOwnPropertyDescriptors(person));

// <<<< 5 Propiedad / método estática de Object >>>>

// Editar todos los atributos (podemos ver en "Descriptors");
//> defineProperty >> El  método estático Object.defineProperty() define una nueva propiedad sobre un objeto, o modifica una ya existente, y devuelve el objeto modificado.
/* Object.defineProperties(person, "PruebaNasa", { */
/*   value: "extraterrestre", */
/*   enumerable: true, */
/*   writable: true, */
/*   configurable: true, */
/* }); */

console.groupEnd();
