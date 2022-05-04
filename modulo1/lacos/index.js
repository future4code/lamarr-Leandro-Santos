//Exercícios de interpretação de código

// Questão 01 => O código está rodando em repetição pelo incremento estipulado i++, partindo do valor 0 da variável até atingir a condição de continuação 1<5, que irá finalizar o loop. No console log, irá ser mostrado o valor final da variável, após finalizar o loop, que será valor final de 10.

// Questão 02
//letra a => Será impresso no console todos os números maiores que 18, onde o for... of... percorre o array e a condição no if solicita os números maiores que 18

// letra b => é possível sim, poderia criar uma variável dentro do bloco do for para solicitar que o mesmo percorra o array e no console.log() imrpimir cada array deste elemento.

// Questão 03 => Será impresso no console 04 linhas, com *, caso o usuário digite 4, sendo na linha 1, um asterisco, na 2 dois asteriscos e assim vai, onde que na quatro será 4 asteriscos.

// Exercícios de escrita de código

// Questão 01 letras "a" à "c"

/* const pets = Number(prompt("Digite quantos bichinhos de estimação você possui."))
if (pets === 0) {
  console.log("Que pena! Você pode adotar um pet!")} 
let arrayPets = [] 

for(let meusPets = 0; meusPets < pets; meusPets++){
  let meusPets = prompt("Digite o(s) nome(s) de seus pets.")
  arrayPets.push(meusPets)
  }
  console.log(arrayPets) */


// Questão 02
//letra a
// console.log("Letra a")
//const arrayOriginal = [16, 24, 25, 28, 21, 55, 70,]
/*for (let i = 0; i < arrayOriginal.length; i++) {
  const element = arrayOriginal[i];
  console.log(element)
} */

// letra b
/* console.log("Letra b")

for (let i = 0; i < arrayOriginal.length; i++) {
  const element = arrayOriginal[i];
  console.log(element / 10)
}
 */


// letra c
// console.log("Letra c")

/* let arrayPares = [] 
for (let numero of arrayOriginal) { 
  if (arrayOriginal.length >= 0) {
    
  }  if(numero % 2 === 0) {
    arrayPares.push(numero)
  }
}
console.log(arrayPares) */


// letra d
/* console.log("Letra d")

for( let posicao = 0 ; posicao < arrayOriginal.length ; posicao++ ){
  let index = arrayOriginal.indexOf(arrayOriginal[posicao])
  let numero = arrayOriginal[posicao]

    console.log( `O elemento do índex ${index} é: ${numero}`)
  }
 */
// letra e
/* console.log("Letra e")

function devolveNumero(array) {
  let valorMaximo = 0;
  let valorMinimo = arrayOriginal[0];
  for (let posicao = 0; posicao<array.length; posicao++) {
    let numeroArray = array[posicao];
    if (numeroArray > valorMaximo)  {
      valorMaximo = array[posicao]           

    }
   }
   return `O maior número é ${valorMaximo} e o menor é ${valorMinimo}`
}
console.log( devolveNumero(arrayOriginal)); */

// Desafios ====> vou me desafiar amanhã...

