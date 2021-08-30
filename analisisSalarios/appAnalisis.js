console.group("Análisis");
// =============== Análisis: Total / promedio / Mediana =================== >
// =============== Análisis: general / top 10% de personas =================== >
// Creamos la Array en dónde estarán todas nuestras personas / salario ==== >

// 1)
// ===  Creamos todo el análisis de salario >>>>>>>>

// ===  LLamar a los puros salarios ===== Funciones y eventos====== >>>>>
const analSalaryUSA = salaryUSA.map(function (person) {
  return person.salary;
});
// ============================== example ===========================
/* function compare(a, b) { */
/*   if (a es menor que b según criterio de ordenamiento) { */
/*     return -1; */
/*   } */
/*   if (a es mayor que b según criterio de ordenamiento) { */
/*     return 1; */
/*   } */
/*   // a debe ser igual b */
/*   return 0; */
/* } */

// === Llamar a los salarios ordenadamente === >>>>>
const analSalaryUSASorted = analSalaryUSA.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

// 2)
// < =============== Calcular la mediana ============= >

// <<<<< Saber si el numero es par o impar ===== >>>>>
// >>>>>>>>>>>>> Helpers o utils >>>>>>>>>>>>
// >>>>>>>>>>>>> Si el residuo de la divisió0n %2 = 0 > true (par)  >>>>>>>>>>>>
// >>>>>>>>>>>>> Si el residuo de la divisió0n %2 != 0 > false (no es par)  >>>>>>>>>>>>
esPar = (person) => {
  /* if(person % 2 === 0 ) { */
  /*     return true;  */
  /* }else { */
  /*     return false;  */
  /* } */

  return person % 2 === 0;
};

// ===== Calcular la mediana function / General > cualquier País ======>>>>>>
// Ayuda al promedio para calcular la media entre medianaSalary / espar o impar
calcularMediaAritmetica = (list) => {
  const sumList = list.reduce(function (valorAcumulado = 0, nuevoValor) {
    return valorAcumulado + nuevoValor;
  });
  // >>> lLAMAR AL PROMEDIO >>>>

  const promedioLista = sumList / list.length;
  return promedioLista;
};

// ===== Promedio ==> Ayudar a calcularlo para la mediana.
// => ParseInt => Quitar los decimales
// => -1 => Tenemos que ir a la posición anterior
medianaSalary = (list) => {
  const middle = parseInt(list.length / 2);

  if (esPar(list.length)) {
    const middlePerson1 = list[middle - 1];
    const middlePerson2 = list[middle];

    // > Calcular la mediana de salarios <=
    const mediana = calcularMediaAritmetica([middlePerson1, middlePerson2]);
    return mediana;
  } else {
    // es impar ==>
    const middlePerson = list[middle];
    return middlePerson;
  }
};

const mediaGeneralUSA = medianaSalary(analSalaryUSASorted);

// 3)
// ====== Calculate Mediana Top 10% = Mayor ingreso ===== splice() ======= >
// >>> Nuevo método => splice => star (comienza el corte) /count (cuántos cortar) <<<
const spliceStart = (analSalaryUSASorted.length * 90) / 100; // > Calcular el 10% <
const spliceCount = analSalaryUSASorted.length - spliceStart; // > Desde dónde cortamos <
// TOP 10%
const salaryUSATop10 = analSalaryUSASorted.splice(spliceStart, spliceCount);
// Llamar el 10%
const mediaUSATop = medianaSalary(salaryUSATop10);

// === Llamar a las funciones y eventos == >
//1 = >
console.log(analSalaryUSA);
console.log(analSalaryUSASorted);
//2) = >
console.log(esPar());
console.log(`Es la media o mediana ${mediaGeneralUSA}`);
// 3) = >
console.log(salaryUSATop10);
console.log(`La media del top 10% es ${mediaUSATop}`);

console.groupEnd();
