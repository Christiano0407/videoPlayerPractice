console.group(" Abstracción/ Encapsulamiento / Sin prototipos");
// Sin ptototipos y sin clases ====>

// =>>> ================================================================================ <<<

// 2) > Validar si es un Objeto y Array >>>>> 2)
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

// 1) > DeepCopy>>> 1)
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
  // Ciclo for() > Para iterar por cada uno de nuestro subject
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
//const obj2 = deepCopy(obj1);

// 3) > Abstacción  sin prototipos === >>>

const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approveCourses: undefined,
  learningPath: undefined,
  socialMedia: {
    instagram: undefined,
    twitter: undefined,
    FontFace: undefined,
    tiktok: undefined,
  },
};

// 4) > copiar el objeto / Agregamos nuevos datos === >>>
const mati = deepCopy(studentBase);
//> Propiedades>
mati.name = "Mati Velázquez";
mati.age = 25;
(mati.instagram = "mati04Sport"),
  //> editar una propiedad>
  /*  Object.defineProperty(mati, "name", { */
  /*    value: "Mati álvarez", */
  /*    // evitar borrar la propiedad "name"> */
  /*    configurable: false, */
  /*  }); */

  // Object.seal >> Eviar ser editadas / y Borrarlas >
  // Además, ya no es necesario usar defineProperty.
  Object.seal(mati);
(mati.name = "Mati de Velázquez"),
  // > Object.isSealed() y isFrozen()
  // verificar si tienen protección =>
  Object.isSealed(mati);

// ==================== Llamar >>
console.log(studentBase);
console.log(mati);
console.log(delete mati.name); // => False (No se puede borrar).
console.log(Object.isSealed(mati)); // ==> true ( protejida en datos ).
console.groupEnd();
