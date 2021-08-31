console.group(`Objecto Oriented Programming`);
// Programming Oriented Programming =>
// >>> - Nuevos elementos = OBJETOS = PROPIEDADES = VALOR = >
// >>>  Métodos y parámetros / Clases y Prototype y atributos <<<<<

// > Observar los problemas en forma de OBJETOS => Solucionarlo en código.
// >>> Programación estructurada / reutilizar código.

// >>> PARADIGMA: "Teoría que suministra la base y modelo para resolver problemas".
// ========= (Paradigma OPP = Los cuatro) ========== se compone ===== >
// > Clases.
// > Propiedades.
// > Métodos.
// > Objetos.

// < ================= Tiene además 4 pilares ============ >
// > Encapsulamient.
// > Abstracción.
// > Herencia.
// > Polimorfismo.

// ===================================================================================
// 1)
// Objeto >
let duck = {
  name: "Luisa", // Propiedades = String y number. / Clave y Valor.
  numLegs: 2,
};
console.log(duck);
console.log(duck.name);

//2) Create Method on an Object =>
let ducks = {
  name: "Ducks",
  firstName: "Quack",
  // Method = >
  sayName: function () {
    return `The name is ${ducks.name}`;
  },
};
console.log(ducks.sayName());

// 3)
let person = {
  name: "Arthur",
  age: 21,
  // = Method =
  sayAge: function () {
    return `The age is ${person.age}`;
  },
};
console.log(person);
console.log(person.sayAge());
console.log(person.hasOwnProperty("name"));
// <<<< ================================================================================ >>>>>
// Prototype > Methods >>
//4) Crear Objetos y prototype o prototipos en javascript >
// Los objetos literales, sí,  son objetos >
const girlNatalia = {
  name: "Natalia",
  age: 25,

  // = Array =
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],

  // = Method / Crear Método / Function new =
  // < Palabra reservada This / This es girlNatalia = Objeto >
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
};
console.log(girlNatalia);
// = Hacer que Natalia apruebe otro curso = Method / Métodos (antes prototype) =
console.log(girlNatalia.cursosAprobados.push("Curso Orientado a Objetos"));
console.log(girlNatalia.cursosAprobados.length);
girlNatalia.aprobarCurso("Curso de Git y Github"); // Nuevo Curso agregado
console.log(girlNatalia.cursosAprobados);
console.log(girlNatalia.cursosAprobados.length);

// <<< Instancias de método / Method (prototype) >>> ==== This ====
//1)
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;

  // = Otro método por dentro =
  /* this.aprobarCurso = function (nuevoCurso) { */
  /*   this.cursosAprobados.push(nuevoCurso); */
  /* }; */
}
// = Mandamos llamar por fuera los métodos = Creamos un Método = aprobarCurso >
Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
};
// = Llamar al nuevo Student >
// Obj>
const Jennifer = new Student("Jennifer", 21, "Curso de CSS Grid");
// Arra>
const Alejandra = new Student("Alejandra", 31, [
  "Curso de CSS Animation",
  "Curso de Terminal con Linux",
]);

console.log(Jennifer);
console.log(Alejandra);

// ==== Example Two === Method ===
//2) Instance method / prototype
function Sport(name, age, discipline, money) {
  this.name = name;
  this.age = age;
  this.discipline = discipline;
  this.money = money;
}
// Create Method >
Sport.prototype.winningMoney = function (newMoney) {
  this.money.push(newMoney);
};

Sport.prototype.other = function (newDiscipline) {
  this.discipline.unshift(newDiscipline);
};
// new Person >
const LebronJames = new Sport("Lebron James", 31, "Basketball", [1000000]);
const marion = new Sport("Marion Reimers", 30, ["Soccer"], [15000]);

// Llamar >
console.log(Sport);
console.log(LebronJames);
LebronJames.winningMoney(3000000);
console.log(LebronJames);
//>
console.log(marion);
marion.winningMoney(25000);
console.log(marion);
marion.other("Athletism");
console.log(marion);

// <<<< ======================================================================= >>>>>>>>
// CLASES EN JS
// Las clases en Javascript, por dentro son Prototipos (prototype) >
// Una sintaxis parceida a otros lenguajes (prototype = clases), en JS >

// << Palabra reservada "class".
// << Comienza con Mayúsculas.
// << Constructor = Meteremos los parámetros.
// << Palabra reservada This.
// << Podemos crear métodos / methos.

// constructor puedes crearlo como OBJETO => para agregar más parámetros >

// 1)
class Gamer {
  constructor({ name, age, videojuegoTerminado, console, company }) {
    this.name = name;
    this.age = age;
    this.videojuegoTerminado = videojuegoTerminado;
    this.console = console;
    this.company = company;
  }
  // Crear method > function anonimous >
  terminadoVideojuego(terminado) {
    this.videojuegoTerminado.push(terminado);
  }
}

const girlGamer = new Gamer({
  name: "Alma Monster",
  age: 29,
  videojuegoTerminado: ["DOOM"],
  console: "PlayStation 5",
  company: "Sony",
});

console.log(Gamer);
console.log(girlGamer);

// < ============================================================================== >

console.groupEnd();
