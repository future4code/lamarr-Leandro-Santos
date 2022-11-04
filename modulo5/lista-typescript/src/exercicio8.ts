//EXERCICIO 08
const calculo = (palavra: string): number => {
  let numeroPalavra: number = palavra.length;

  for (let i = 1; i < palavra.length; i++) {
    numeroPalavra = numeroPalavra * i;
  }

  return numeroPalavra;
};
console.log(calculo("Lula"));
console.log(calculo("13"));
