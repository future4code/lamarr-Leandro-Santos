//Exercícios

//Exercício 01
console.log("Exercício 01");
//letra a:

//Podemos passar informações, ao rodar os comandos utilizando o process.argv

//letras b e c:

const nome = process.argv[2];
const idade = Number(process.argv[3]);

const frase = (nome, idade) => {
  console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
  return `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${
    idade + 7
  } anos.`;
};
console.log(frase(nome, idade));
