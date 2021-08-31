console.group("OOP / Part Two");
// Atributos => Todas la propiedades del objeto.
// Métodos => Todas las funciones o acciones.
// Objeto == Instancias de clase / igual el Array.
// Herencias => Heredar nuevas clases / prototype.
// Polimorfismo => Muchas formas.

// Objetos literales ===> Los comúnes (siempre hago / sin métodos / sin prototype and class).

// <<<<<<<<<<<<<<<<< ========================================================== >>>>>>>>>>>>>>>>>>>
// <<<<< ====== Instancias de Clase (Class) VS Instancias de Prototipo (prototype) ======= >>>>
//1) = class =

// Crear una instancia spara agregar a Class Principal >>>
class AllVideo {
  constructor({ youtube, vimeo, tiktok, videoBlogging }) {
    this.youtube = youtube;
    this.vimeo = vimeo;
    this.tiktok = tiktok;
    this.videoBlogging = videoBlogging;
  }
}
const videoPlay = new AllVideo({
  youtube: "VideoGammerTube",
  vimeo: "vimeoChannel",
  tiktok: "luisa@girl",
  videoBlogging: "Blogg Travel",
});
// Class Principal >
class OneGamer {
  constructor({
    name,
    userName,
    email,
    twitter = undefined,
    instagram = undefined,
    tiktok = undefined,
    facebook = undefined,
    allVideoGames = [],
    videoGameTerminate = [],
  }) {
    this.name = name;
    this.userName = userName;
    this.email = email;
    this.socialMedia = {
      twitter,
      instagram,
      tiktok,
      facebook,
    };
    this.allVideoGames = allVideoGames;
    this.videoGameTerminate = videoGameTerminate;
  }
}
// Construir un nuevo Objeto / class / NEW == >
const personGamer = new OneGamer({
  name: "Christian",
  userName: "Velázquez",
  twitter: "chris04",
  instagram: "chris04",
  email: "email@example.com",
  videoGameTerminate: ["DOOM", "Fifa 21", "Legends Of Zelda"],
});

const personGamerTwo = new OneGamer({
  name: "Luisa Almeida",
  instagram: "LuisaCount",
  email: "luisa@gmail.com",
  videGameTerminate: ["Madden", "SmashBros", "KirbyGame"],
  allVideoGames: [videoPlay],
});

// Llamar == >
console.log(OneGamer);
console.log(personGamer);
console.log(personGamerTwo);

console.groupEnd();
