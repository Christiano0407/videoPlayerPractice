console.group("Salarios");
// =============== Análisis: Total / promedio / Mediana =================== >
// =============== Análisis: general / top 10% de personas =================== >

// Creamos la Array en dónde estarán todas nuestras personas / salario ==== >
const salaryUSA = [];

// Agregar a nuestra lista === >
salaryUSA.push({
  name: "Freddy",
  salary: 3000,
});

salaryUSA.push({
  name: "Christian",
  salary: 3000,
});

salaryUSA.push({
  name: "Natasha",
  salary: 1500,
});

salaryUSA.push({
  name: "Jennifer",
  salary: 500,
});

salaryUSA.push({
  name: "Luisa",
  salary: 100,
});

salaryUSA.push({
  name: "Scarlett",
  salary: 100,
});

salaryUSA.push({
  name: "Evans",
  salary: 1500,
});

salaryUSA.push({
  name: "Allan",
  salary: 200,
});

salaryUSA.push({
  name: "wILL",
  salary: 750,
});

salaryUSA.push({
  name: "David",
  salary: 2000,
});
// = Llamar a nuestros salarios ===== >
console.log(salaryUSA);
console.log(salaryUSA[0].name);
console.log(salaryUSA[0].salary);
console.log(salaryUSA[9]);

console.groupEnd();
