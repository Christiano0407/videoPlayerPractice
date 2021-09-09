console.group("Module Pattern and Namespace / Propiedades privadas JS");
// >> Module Pattern and Namespace / Propiedades privadas JS>>>>
// >>>> Part One ============================================================= > ========================== >>>>
//> Factory Pattern and RORO (RECIBIR UN OBJETO, Y VAMOS A RETORNAR UN OBJETO) / (Receive Object and Return Object) ========>>>>>>
// >> Retornar el objeto, puede tener muchas propiedades>

// >>>>>>>>>>>>>>>>>>>>>>> Part TWO ============================================================= > ========================== >>>>
// >>>> ===============================================  Module Pattern and Namespace ================================================================= >>
// >> Factory Function >>>
// >> methods >>>

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
  // factory function>
  // Mantener mi objecto / no quiero que se puedan cambiar >
  const private = {
    // protegida>
    _name: name,
  };
  // Estos sí los pueden ver / los pueden cambiar >
  const public = {
    age,
    email,
    socialMedia: {
      instagram,
      facebook,
      twitter,
      tiktok,
    },
    //method>
    readName() {
      return private["_name"];
    },
    changeName(newName) {
      private["_name"] = newName;
    },
  };
  //Evitar ser editados readname >>
  Object.defineProperty(public, "readName", {
    //evitar los puedan borrar / evitar editar >
    writable: false,
    configurable: false,
  });

  //Evitar ser editado changeName >>
  Object.defineProperty(public, "changeName", {
    writable: false,
    configurable: false,
  });

  return public;
}

//B) >>>>
// Cuando está vacío, en realidad entonces no es nadie(student)>
// > Marca Error => Asignamos "name", y "email", como obligatorios / Esto, a pesar de mandar mis otros parámetros>
const pammela = createStudent({
  name: "Pammela",
  email: "pamm@gmail.com",
  age: 30,
  instagram: "pam04Live",
  facebook: "pamFace",
  twitter: "pamMessage",
  tiktok: "livePamm",
});

const erika = createStudent({
  name: "Erika Luna",
  email: "lunEr@gmail.com",
});

// >>> Invocar =========>
console.log(createStudent);
//>>
pammela.changeName = "Pammela Velázquez Oviedo"; // => writable > true > para se pueda editar.
console.log(pammela);
//>>
erika.changeName = "Erika Luna"; // => writable > true > para se pueda editar.
console.log(erika);

console.groupEnd();
