//Exercício 1
const frase = () => {
  let nome: string = process.argv[2];
  let data: string = process.argv[3];
  let split: string[] = data.split("/");

  return `Olá, me chamo ${nome}, nasci no dia ${split[0]} do mês ${split[1]} do ano de ${split[2]}.`;
};
console.log(frase());
