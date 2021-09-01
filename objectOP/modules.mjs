console.group("Modules");
// < Módulos de ECMAScript 6 >
// Code Runner => Poder correr los módulos.

// Import >>>>>>>>>>>>
// > El uso de los módulos en JavaScript depende de las declaraciones Export e Import.
// > Para modular, solo basta que el archivo tenga la extensión .js, pero el motor V8 que es el que corre en los navegadores, recomienda usar la extensión .mjs
// > Esto es util porque queda claro cuál archivo es modulo y cual no.
// > Asegura que los archivos de modulo sean tratados como tal por la extensión Babel o Node.js
// > ¿Como Exportar?
// > hay dos formas de exportar:
// >> Colocar en frente de cada elemento la palabra export Exportar en una sola
// >> declaración al final del archivo modulo las características que se quieren exportar, ejemplo:

// ====== Import >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
import { PlatziClass } from "../objectOP/oppPracticeGetSet.mjs";

// Llamar a una nueva clase >
const clase04 = new PlatziClass({
  name: "Javascript en Video",
  videoID: "004007100118",
});
// > Llamar a funciones de reproducir.
clase04.reproducir();
clase04.pausar();

clase04.reproducir();
clase04.pausar();

// Invocar ====>
console.log(clase04);

console.groupEnd();
