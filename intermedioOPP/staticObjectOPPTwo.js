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
// Recibe tres Parámetros >>
// 1) Objeto.
// 2) Nombre de la propiedad que le voy a agregar.
// 3) Mandar un objeto({})
Object.defineProperty(person, "PruebaNasa", {
  value: "extraterrestre",
  enumerable: false, // Puede aparecer o no (depende).
  writable: true,
  configurable: true, // Impide que borres propiedades.
});
console.log(Object.getOwnPropertyDescriptors(person));

Object.defineProperty(person, "Console", {
  value: "PlayStation 5",
  enumerable: true,
  writable: false,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptors(person));
// > enumerable > False = no aparece en keys >
console.log(Object.keys(person));
// > enumerable > false = Sí aparce (getOwn) >
console.log(Object.getOwnPropertyNames(person));
console.groupEnd();

// Otros métodos estáticos de Object >>>>
Object.seal(); // El método Object.seal() sella un objeto, previniendo que puedan añadirse nuevas propiedades al mismo, y marcando todas las propiedades existentes como no-configurables. Los valores de las propiedades presentes permanecen pudiendo cambiarse en tanto en cuanto dichas propiedades sean de escritura.
Object.freeze(); // El método Object.freeze() congela un objeto, es decir: impide que se le agreguen nuevas propiedades; impide que se puedan eliminar las propiedades ya existentes; impide que dichas propiedades, o su capacidad de enumeración, configuración, o escritura, puedan ser modificadas; impide también que se pueda modificar su prototipo. El método devuelve el objeto recibido.
