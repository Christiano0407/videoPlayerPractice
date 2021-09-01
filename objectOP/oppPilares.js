console.group("Pilares de OOP");
// ========= (Paradigma OPP = Los cuatro) ========== se compone ===== >
// > Clases.
// > Propiedades.
// > Métodos.
// > Objetos.

// < ================= Tiene además 4 pilares ============ >
// > Encapsulamient.
// > Abstracción = (Abstraer los datos de un objeto para crear su CLASE / PROTOTIPO).
// > Herencia.
// > Polimorfismo.

//  = Import (recibe) / export (manda) =
// = > import (archivo/function..) from `js` < =
// = > export default class (clase/función etc) < =

// <<<<< =============================================================================================== >>>>>>
// > Abstracción Javascript OPP. / Instancia Class
// A)
class Course {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica", // Podemos agregarlo a otro NEW.
});
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
