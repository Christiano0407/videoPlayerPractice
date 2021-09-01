console.group("Getter and Setters Javascript");
// => Encapsulamiento <=
// Palabra deribada get (getters) => Enlaza la propiedad de un objeto con una función que será llamada cuando la propiedad es buscada.
// << ============================================================================ >>
class Course {
  constructor({ name, classes = [] }) {
    this._name = name; //(No puedan ser llamados)
    this._classes = classes;
  }
  // getter =No puede ser llamado.
  get name() {
    return this._name;
  }
  //setter > Permite cambiar y ser llamado.
  set name(nuevoNombrecito) {
    // Evitar nombres al ser llamado
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
// getter (evitar llamar)
/* cursoProgBasica.name; */
// Curso Gratis de Programación Básica
// setter (cambiar nombre y llamar)

cursoProgBasica;
const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
});

//B)
class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
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

console.groupEnd();
