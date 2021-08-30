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

// >> Saber si el numero es par ===== >>
// >>>>>>>>>>>>> Helpers o utils >>>>>>>>>>>>
esPar = (person) => {
  /* if(person % 2 === 0 ) { */
  /*     return true;  */
  /* }else { */
  /*     return false;  */
  /* } */

  return person % 2 === 0;
};

// ===== Calcular la mediana / Function ======>>>>>>
calcularMediaAritmetica = (list) => {
  const sumList = list.reduce(function (valorAcumulado = 0, nuevoValor) {
    return valorAcumulado + nuevoValor;
  });
  // >>> lLAMAR AL PROMEDIO >>>>

  const promedioLista = sumList / list.length;
  return promedioLista;
};

// ===== Promedio ==> Ayudar a calcularlo para la mediana.
medianaSalary = (list) => {
  const middle = parseInt(list.length / 2);

  if (esPar(list.length)) {
    const middlePerson1 = list[middle - 1];
    const middlePerson2 = list[middle];

    const mediana = calcularMediaAritmetica([middlePerson1, middlePerson2]);
    return mediana;
  } else {
    // es impar ==>
    const middlePerson = list[middle];
    return middlePerson;
  }
};

const mediaGeneralUSA = medianaSalary(analSalaryUSASorted);

// ====== Calculate Mediana Top 10% ===== splice() ======= >

// === Llamar a las funciones y eventos == >
//1=>
console.log(analSalaryUSA);
console.log(analSalaryUSASorted);
//2)=>
console.log(esPar());
console.log(`Es la media o mediana ${mediaGeneralUSA}`);
console.groupEnd();
