console.group("Promedio");
// ========= Taller 3: promedio, mediana y moda ===========>

/*     e ===== STADÍSTICA  ========*/
//- Primer paso: definir las fórmulas
//- Segundo paso: implementar la fórmulas en JavaScript
//- Tercer paso: crear funciones
//- Cuarto paso: integrar JS con HTML
//# curso-practico-javascript

// Promedio ========== >>>>>>>>>
// Fórmula: Media aritmética:
/* Ventana1 + ventana2 + ventana3 / cantidad de ventanas */

// MEDIANA ====== >>>>>>>>>>
// Elemento que esté exactamente en medio de la lista.

// MODA ======== >>>>>>>>>>
// Elemento que más se repite de una lista

// =================================================================================
// =>>>>>>>> Variables <<<<<<<<
const listOne = [100, 200, 300, 400, 500];

// <<<<<<<<< Events and functions >>>>>>>>>>>>>>

// ==== > Ciclo ==== Llamar por medio del ciclo a cada elemento de la lista >>>>>>> >
let sumListOne = 0;
for (let i = 0; i < listOne.length; i++) {
  sumListOne = sumListOne + listOne[i];
}

// ==== > Promedio ==
const promedioLista = sumListOne / listOne.length;
// =>>> Promedio es = 300;

// >>>>>>>>>>>>>>>> Invocar  <<<<<<<<<<<<<<<
console.log(promedioLista);
console.log(listOne);
console.log(sumListOne);

console.groupEnd();
