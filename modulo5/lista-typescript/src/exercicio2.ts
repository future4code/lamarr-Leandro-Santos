//EXERCICIO 2
const variavel = true;
const tipoVariavel = (variavel: string | number | boolean | undefined) => {
  return variavel;
};

console.log(tipoVariavel(typeof variavel));
