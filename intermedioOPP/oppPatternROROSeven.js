console.group("Factory Pattern and RORO");
// = Part ONE>>> ================================================================================ <<<

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

// <<< PART TWO >>> ===================================>
//> Factory Pattern and RORO (RECIBIR UN OBJETO, Y VAMOS A RETORNAR UN OBJETO) / (Receive Object and Return Object) ========>>>>>>
// >> Retornar el objeto, puede tener muchas propiedades>

//C) >>>>
// Nos tire un error cuando no se llama a algún parámetro (name, email)>
// Requerir parámetros a "fuerza", para crear un nuevo estudiante>
function requireParameter(param) {
  // mensaje al error>
  throw new Error(param + " " + "Lo siento, el parámetro es obligatorio");
}

// A) >>>>
// Para perdonar una lista vacía (array) => el parámetro que va a recibir nuestra función es otro parámetro (={}) >>
function createStudent({
  name = requireParameter("name"), // Parámetro requerido / llamar.
  age,
  email = requireParameter("email"),
  instagram,
  facebook,
  tiktok,
  twitter,
  approveCourses = [], // Array vacío.
  learningPath = [], // Array vacío.
  // Para perdonar una lista vacía (array) => el parámetro que va a recibir nuestra función es otro parámetro (={}) >>
} = {}) {
  return {
    name,
    age,
    email,
    socialMedia: {
      instagram,
      facebook,
      twitter,
      tiktok,
    },
    approveCourses,
    learningPath,
  };
}

//B) >>>>
// Cuando está vacío, en realidad entonces no es nadie(student)>
// > Marca Error => Asignamos "name", y "email", como obligatorios / Esto, a pesar de mandar mis otros parámetros>
const pammela = createStudent({
  //name: "Pammela",
  //email: "pamm@gmail.com",
  age: 30,
  instagram: "pam04Live",
  facebook: "pamFace",
  twitter: "pamMessage",
  tiktok: "livePamm",
});

// >>> Invocar =========>
console.log(createStudent);
console.log(pammela);
console.groupEnd();
