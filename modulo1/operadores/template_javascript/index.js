//Exercícios de interpretação de código

// Questão 01

/* const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // Respota: Retorna false, só retorna true no && se todos forem true

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // Respota: Retorna false, daria false, mas como tem o valor !boll2, que trás o oposto e retorna false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // Respota: Retorna true, pois há a regra do oposto em resultado

console.log("d. ", typeof resultado) // Respota: Retorna boolean, pois são variáveis do tipo boolean nesses operadores */

// Questão 02

/* let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
const soma = primeiroNumero + segundoNumero // O prom só retorna strings, onde que o problema é a falta da informação Number(), ou seja, ao invés de somar os valores está concatenando os dois. Ex: se no prompt é digitado 10 e depois 10, o console retornará 1010 e não a soma 20.
console.log(soma) 
 */

// Questão 03

// A solução seria acrescentar o atributo Number() nas variáveis let, para que seja lido pelo console como Numbers e não strings, fazendo assim a soma dos valores solicitados no prompt

// Exercícios de escrita de código

// Respotas questão 01 letras "a" a "d"

/* let idade = Number(prompt("Digite sua idade"))
let idadeAmigo = Number(prompt("Digite a idade do seu melhor amigo ou da sua melhor amiga"))
const maiorIdade = (idade > idadeAmigo === true)
console.log("Sua idade é maior do que a do seu melhor amigo?", maiorIdade) */

// Respotas questão 02 letras "a" a "d"

/* let numeroPar = Number(prompt("Digite um número par"))
const restoDaDivisao = Number ((numeroPar % 3))

console.log(restoDaDivisao) */

// Sim, há um padrão, ao testar com vários números pares, só retorna 02
// Ao inserir números ímpar, só retorna 1
// Notei ser em virtude da divisão ser por 2, se utilizarmos um divisor diferente, pode retornar outro resto de divisão, como no exemplo da aula (11 % 4) que retorna o resto 3. 

// Respotas questão 03 letras "a" a "c"

/* let idade = Number(prompt("Digite sua idade"))
const idadeEmMeses = (idade * 12)
const idadeEmDias = (idadeEmMeses * 30)
const idadeEmHoras = (idadeEmDias * 24)

console.log("Sua idade em meses é:", idadeEmMeses)
console.log("Sua idade em dias é:", idadeEmDias)
console.log("Sua idade em horas é:", idadeEmHoras) */

// Respotas questão 04

/* let numeroUm = Number(prompt("Digite um número"))
let numeroDois = Number(prompt("Digite outro número"))
console.log("Primeiro número digitado:",numeroUm,"Segundo número digitado:",numeroDois)


console.log("O primeiro número é maior que o segundo?", numeroUm > numeroDois)
console.log("O primeiro número é igual ao segundo?", numeroUm === numeroDois)
console.log("O primeiro número é divisível pelo segundo?", Boolean ( numeroUm / numeroDois))
console.log("O segundo número é divisível pelo primeiro?", Boolean(numeroDois / numeroUm)) */

//OBS.: tive um dia corrido, não deu tempo fazer o desafio, irei tentar posteriormente
