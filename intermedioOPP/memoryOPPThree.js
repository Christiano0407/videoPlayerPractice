console.group("Memory STACK Javascript");
// > 🎳 Las variables son referencias a un espacio en memoria.
// > 🎩 Los navegadores web usan dos tipos de memorias: Stack y Heap.
// > 📁 La memoria Stack es muy rápida, pero sin tanto espacio. Aquí se guardan los valores primitivos (booleanos, strings, números…).
// > 🌪 La memoria Heap es más lenta, pero permite guardar enormes cantidades de información (son como los tornados: grandes, lentos y desordenados). En esta memoria guardamos los valores de los objetos ({...}).
// > Entender cómo funciona la memoria en JavaScript no solo será útil para aprender POO, sino también para programación funcional. 😉

// ============== MEMORIA ===================
// > STACK > Nombres / Variables => Js (memoria STACK).
// > HEAP > Objetos.
// > Event Loop >

// >>> ========== Shallow Copy ============================================================================== Shallow Copy ======================================================================================================================== shallow Copy ========================= <<<
// Evitar que cuando creas un objeto, y lo modificas (propiedades), no se pasen las modificaciones al otro objeto creado >>>
// Las copias originales sí, afectan a sus copias / las copias (heredadas) no(originales).
// == Nuevo objeto estático ==
// create: method creates a new object, using an existing object as the prototype of the newly created object.
// assign: method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
// >>>>
// origonal>
const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
};

// herencia / copy>>>>>>>
// Método estático >>>
const obj3 = Object.assign({}, obj1);
obj3.a = "New Object"; // Modifico "a" de obj3 / no cambia el original.
const obj4 = Object.create(obj1);
obj4.a = "Hola"; // Nuevos parámetros (crea un nuevo object) / no se modifica el original

// ========== Llamar >
console.log(obj1);
console.log(obj3);
console.log(obj4);

console.groupEnd();
