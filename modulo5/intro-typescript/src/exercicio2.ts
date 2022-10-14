//Exercício 2
const userInput = require("readline-sync")

//Primeira tentativa:
// const cor1= userInput.question("Insira sua primeira cor favorita: ")
// const cor2 = userInput.question("Insira sua segunda cor favorita: ")
// const cor3 = userInput.question("Insira sua terceira cor favorita: ")


//Refatorado! :):

function imprimeTresCoresFavoritas(): void {
  const cor1:string = userInput.question("Insira sua primeira cor favorita: ")
  const cor2:string = userInput.question("Insira sua segunda cor favorita: ")
  const cor3:string = userInput.question("Insira sua terceira cor favorita: ")
  console.log([cor1, cor2, cor3])
}
imprimeTresCoresFavoritas()



