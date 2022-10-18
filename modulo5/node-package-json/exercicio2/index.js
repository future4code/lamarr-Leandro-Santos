//Exercícios

//Exercício 02 = não consegui pensar na lógica, não chama no swith
console.log("Exercício 02");

// const sub = Number(process.argv[2]);
// const mult = Number(process.argv[2]);
// const div = Number(process.argv[2]);
const add = Number(process.argv[2]);
const number1 = Number(process.argv[3]);
const number2 = Number(process.argv[4]);

let operacoes = (number1, number2) => {
  let add1 = number1 + number2;
  switch (operacoes) {
    case add:
      console.log(`Resposta: ${add1}`);
      break;
    case "sub":
      console.log(number1 - number2);
      break;
    case "mult":
      console.log(number1 * number2);
      break;
    case "div":
      console.log(number1 / number2);
      break;
  }
  console.log(operacoes(number1, number2));
};
