//Exercício 1

function isOneEdit(strA: string, strB: string): boolean {
  // Se a diferença de tamanho entre as duas é maior que 1, não é oneEdit
  if (Math.abs(strB.length - strA.length) > 1) return false;

  // Se uma é maior que a outra, a maior obrigatoriamente deve incluir a outra
  if (strA.length > strB.length) return strA.includes(strB);
  if (strB.length > strA.length) return strB.includes(strA);

  // Passando pelos ifs acima, significa que as duas têm o mesmo tamanho
  // Nesse caso, varremos as strings contando quantas letras diferentes tem
  let charsDiffCount = 0;
  for (let i = 0; i < strA.length; i++) {
    if (strA[i] !== strB[i]) charsDiffCount++;
  }

  // Retorna true se a diferença é 1, false caso contrário
  return charsDiffCount === 1;
}

console.log(isOneEdit("banana", "bananak"));

//Exercício

function compressString(input: string): string {
  let compressed = ""; // string comprimida
  let count = 1; // contador de caracteres repetidos em sequência

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      // Se o próximo caractere for igual ao atual, incrementa o contador
      count++;
    } else {
      // Se o próximo caractere for diferente, adiciona o caractere atual e sua contagem à string comprimida
      compressed += input[i] + count;
      count = 1; // reinicia o contador para o próximo caractere
    }
  }

  // Verifica se a string comprimida é menor do que a string original
  return compressed.length < input.length ? compressed : input;
}

console.log(compressString("aaaaaaaaaaaabbbbbbbbbbbbbcccccccccccddddddddde"));
