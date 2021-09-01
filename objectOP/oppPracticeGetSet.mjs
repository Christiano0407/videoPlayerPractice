console.group("Getter and Setters Javascript");
// => Encapsulamiento <=
// Palabra deribada get (getters) / (captador) => Enlaza la propiedad de un objeto con una función que será llamada cuando la propiedad es buscada.
// << ============================================================================ >>
// >>>>>>>>>>>>> >>>>>>>>>>>>>>>>>>>>>>>>>>>> >>>>>>>>>
// Module >>>>
// Import

// >> ================== >>
class Course {
  constructor({ name, classes = [] }) {
    this._name = name; //(No puedan ser llamados) / cuando tienen un (_).
    this._classes = classes;
  }
  // getter =No puede ser llamado. / Invocado como método (()), pero, al llamarlo no es necesario.
  // Operador get.
  get name() {
    return this._name;
  }
  //setter > Permite cambiar y ser llamado. / Encapsulamient0.
  set name(nuevoNombrecito) {
    // Evitar nombres al ser llamado / Condicional => Validar que no puedan cambiar el nombre.
    if (nuevoNombrecito === "Curso Malito de Programación Básica") {
      console.error("Web... no!");
    } else {
      this._name = nuevoNombrecito;
    }
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica", // Podemos agregarlo a otro NEW.
});
// > getter (evitar llamar)
/* cursoProgBasica.name; */
// Curso Gratis de Programación Básica
// > setter (cambiar nombre y llamar)

// << cursoProgBasico.name = "NuevoCursoProgramaciónBásico" = Nuevo nombre asignado / mando crear y llamar.
// << cursoProgBasico.name = "CursoMalito de Programación Básica" => Me va a saltar el "error" => Le prohibimos llamar el curso de esa
//cursoProgBasica;

const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
});

//B)
class LearningPath {
  constructor({ name, courses = [] }) {
    this._name = name;
    this.courses = courses;
  }
  // getter >
  get name() {
    return this._name;
  }

  // setter >
  set name(nuevaEscuela) {
    if (nuevaEscuela === "Escuela Principiantes Web") {
      console.error("Web...No! Not exist this school");
    } else {
      this._name = nuevaEscuela;
    }
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [cursoProgBasica, "Curso DataBusiness", "Curso Dataviz"],
});

const escuelaVgs = new LearningPath({
  name: "Escuela de Vidweojuegos",
  courses: [cursoProgBasica, "Curso de Unity", "Curso de Unreal"],
});
// === CLASS ===
class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses; // Abstracción
    this.learningPaths = learningPaths; // Abstracción.
  }
}

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [escuelaWeb, escuelaVgs], // Agregamos la abstracción.
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [escuelaWeb, escuelaData], // Abstracción.
});
// ==== > Llamar >
console.log(juan2);
console.log(miguelito2);
console.groupEnd();

// <<< =========================================================================== >>>
// < Módulos de ECMAScript 6 >
