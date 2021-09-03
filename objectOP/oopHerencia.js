console.group("Herencia");
// Nos permite crear clases / prototype madre (Para heredar).
// Palabra reservada "extend" => Para extender la herencia a otras clases o prototype.
// La palabra clave extends es usada en la declaración o expresión de clases, para crear una clase hija de otra.

// ============  PALABRA HEREDADA ==== > EXTENDS ================

// ================ Herencias ======================================================== >
class Course {
  constructor({
    name,
    classes = [],
    //Validar los cursos (basic/expert)
    isFree = false,
    lang = "spanish",
  }) {
    this._name = name; //(No puedan ser llamados) / cuando tienen un (_).
    this._classes = classes;
    this.isFree = isFree;
    this.lang = lang;
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

// ==>
const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica", // Podemos agregarlo a otro NEW.
  // Validar =>
  isFree: true,
});
// > getter (evitar llamar)
/* cursoProgBasica.name; */
// Curso Gratis de Programación Básica
// > setter (cambiar nombre y llamar)

// << cursoProgBasico.name = "NuevoCursoProgramaciónBásico" = Nuevo nombre asignado / mando
// << cursoProgBasico.name = "CursoMalito de Programación Básica" => Me va a saltar el "err
//cursoProgBasica;

const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
  isFree: false,
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
  isFree: false,
  lang: "english",
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

// ============= === CLASS === ================= ================================================================= >
// <<< =================== CLASS / PROTOTYPE MADRE (HERENCIA) =============================== >>>
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

// < ============================= Class ) => Vamos a usar para hereda ================================================================ >
// > clave => llamar al constructor Madre == > "super" => La palabra clave super es usada para acceder y llamar funciones del padre de un objeto.
// > Las expresiones super.prop y super[expr] son válidas en cualquier definición de método tanto para clases como para objetos literales (en-US).
// Llamar al constructor de nuestra madre (Student)
// parámetro => heredar igual constructor

//1)
class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }
  // < Llamar al método y manipular el ya creado "approvedCourses" >
  // = Crear un nuevo método =
  approvedCourse(newCourse) {
    // => Curso abierto <=
    // > isFree => propiedad.
    if (newCourse.isFree) {
      // Heredando =>
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        `Lo sentimos ${this.name}, únicamente puedes tomar cursos abiertos`
      );
    }
  }
}

//2)
// = Validar que el curso al que accedemos no sea de una escuela / curso en específico =
// > Lenguaje (lang) <
class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }
  approvedCourse(newCourse) {
    //validar >
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        `Lo sentimos mucho ${this.name}; los cursos en inglés, sólo pueden ser accedidos con una cuenta Expert`
      );
    }
  }
}

// 3)
// = Validar al ser "EXPERT", puedes tomar todos los cursos =
class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }
  approvedCourse(newCourse) {
    //validar => no necesitamos.
    this.approvedCourses.push(newCourse);
  }
}

// < ================ new ====================== >
const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [escuelaWeb, escuelaVgs], // Agregamos la abstracci
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [escuelaWeb, escuelaData], // Abstracción.
});

// > New Herencias ====> Validar las instancias = >
const jennifer1 = new FreeStudent({
  name: "Jennifer Velázquez",
});

const luisa1 = new BasicStudent({
  name: "Luisa Sánchez",
  email: "luigi@gmail.com",
  learningPaths: [escuelaWeb],
});

const erika1 = new ExpertStudent({
  name: "Erika Sol",
  email: "eri@gmail.com",
  learningPaths: [escuelaVgs, escuelaData],
});

// ==== > Llamar >>>>>>>>>>
console.log(juan2);
console.log(miguelito2);
// Validar =
console.log(FreeStudent);
// Free)
console.log(jennifer1);
console.log(jennifer1.approvedCourse(cursoProgBasica));
console.log(jennifer1.approvedCourse(cursoPracticoHTML));
console.log(jennifer1);
// Basic)
console.log(luisa1);
console.log(luisa1.approvedCourse(cursoDefinitivoHTML));
console.log(luisa1.approvedCourse(cursoPracticoHTML));
console.log(luisa1);
// Expert)
console.log(erika1);
console.log(erika1.approvedCourse(cursoPracticoHTML));
console.log(erika1);

console.groupEnd();
