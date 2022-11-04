// Exercício 02

//letra a
//Entradas => numeros
//saídas => return

function obterEstatisticas(numeros: number[]) {
  const numerosOrdenados: number[] = numeros.sort(
    (a: number, b: number) => a - b
  );

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas: { maior: number; menor: number; media: number } = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}
console.table(obterEstatisticas([10, 5,8]));


