//Exercícios de interpretação de código
// Questão 01
/* let a = 10
let b = 10

console.log(b) //será impresso no console o valor da variável que é 10

b = 5
console.log(a, b) //será impresso no console os valores das variáveis que são 10 e 5, haja vista que estamos desclarando/alterando na linha 7 o valor de b=5 */


//  Questão 02
/* let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)   será impresso no console os valores 10, 10 e 10 haja vista que estamos atribuindo novas condições, não repassando a variavel c mas atribuindo igualdade a mesma nas condições posteriores a ela, ao informar que c=a; b=c e a=b, mudando assim o valor da variavel b e dando o valor a variavel a.*/


//  Questão 03
/* let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`) */

//a função cria um prompt de comunicação, para o usuário preencher duas infromações e obter o cálculo por meio de uma janela pop-up do alert, sendo o resultado o valor da hora trabalhada
/* let horasPordiaTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let recebePorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${recebePorDia/horasPordiaTrabalhadas} por hora`) */




//Exercícios de escrita de código

//Questão 01
/* let nome //letra a
let idade //letra b
console.log(typeof nome, typeof idade) // letra c

// letra d= obtém o retorno undefined pois não está atribido nenhum valor às variáveis, retornando um valor indefinido

//letra e
  nome= prompt("Qual seu nome?")
  idade= Number(prompt("Qual sua idade?"))

console.log(typeof nome, typeof idade) // letra f = notei que informa ser uma string na variável nome, mas não retornou number e sim o número da variável idade que é 26, aí lembrei que teria que inserir novamnete o typeof para a variável idade, após isso retornou corretamente, string e number

// letra g
  console.log("Olá,", nome, "você tem", idade, "anos.")

//  Questão 02
//letra a
let pergunta1
let pergunta2
let pergunta3

pergunta1= prompt("Você está feliz? - Sim/Não")
pergunta2= prompt("Você tem animais de estimação? - Sim/Não")
pergunta3= prompt("Você mora no Brasil? - Sim/Não")

// letra b
console.log("Você está feliz?", pergunta1)
console.log("Você tem animais de estimação?", pergunta2)
console.log("Você mora no Brasil?", pergunta3) 

//  Questão 03
let a = 10
let b = 25
let c = 0

c=a
a=b
b=c
console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)
//foi criado uma nova variável chamada de c, onde atribuí um valor 0, e fiz uma lógica de combinação das mesmas, atribuindo o valor de c ser o valor de a, logo c ficou 10, em a foi atribuido o valor de b, que ficou 25 e em b foi atribuido o valor de c, que "herdou" o valor de a, ou seja, 10.


// Desafio

//neste desafio, utilizei a ideia repassada anteriormente, no exercício exemplo, utilizando o comando para concatenar valores e informações e realizei a soma e multiplicação em dois console.log
const primeiroNumero = Number(prompt("Digite um número"))
const segundoNumero = Number(prompt("Digite outro número"))
console.log((`O primeiro número somado ao segundo resulta o valor de = ${primeiroNumero + segundoNumero}`))
console.log((`O primeiro número multiplicado ao segundo resulta o valor de = ${primeiroNumero * segundoNumero}`))



//entretanto, como ainda não foi ensinado a utilização acima, realizei outra lógica para a variavel const de modo que retornasse o valor desejado ao imprimir no console
const numeroUm= primeiroNumero
const numeroDois= segundoNumero
console.log("O primeiro número somado ao segundo resulta o valor de =",numeroUm+numeroDois)
console.log("O primeiro número multiplicado ao segundo resulta o valor de =",numeroUm*numeroDois)

*/



