// EXERCICIO 06

type Clientes = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};
const banco: Clientes[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

let somaNumeros = banco
  .map((item) => item.debitos[0])
  .reduce((prev, curr) => prev + curr, 1);
console.log(somaNumeros);
//Incompleto
