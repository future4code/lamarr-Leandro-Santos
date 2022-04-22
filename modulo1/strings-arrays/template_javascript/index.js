//Exercícios de interpretação de código

// Questão 01
//letra a ===> por não ter declarado o valor, retorna undefined
//letra b ===> por esta declarando valor null, retorna null
//letra c ===> Como está solicitando o length (array.length), retorna 11, por existir 11 valores no array
//letra d ===> retorna o número 3, pois o array começa com o número 3 e a let indica que o i é posição 0
//letra e ===> retorna o número 19, pois o array começa com o número 3 e a let indica que o i é posição 0 e o +1 leva o número 19 para segunda posição no caso o array posição 1.
//letra f ===> retorna o valor 9, pois oao inserir valor e tewr a soma, vai somar o valor 3 do array 0 mais 6 dado na questão

// Questão 02
//Será impresso: SUBI NUM ÔNIBUS EM MiRROCOS 26** 27 é o correto (por pouco não acero a contagem rsrsr)
/* const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) */

//Exercícios de escrita de código

// Questão 01
/* const nomeDoUsuario = prompt("Digite seu nome")
const emailDoUsuario = prompt("Digite seu email")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`) */

// Questão 02
/* const comidasPreferidas = ["Macarronada", "Arroz ao leite", "Batata Frita", "Pizza", "Feijodada"]

console.log(comidasPreferidas) //letra a */

// letra b
/* console.log("Essas são as minhas comidas preferidas: ",comidasPreferidas[0])
console.log("Essas são as minhas comidas preferidas: ",comidasPreferidas[1])
console.log("Essas são as minhas comidas preferidas: ",comidasPreferidas[2])
console.log("Essas são as minhas comidas preferidas: ",comidasPreferidas[3])
console.log("Essas são as minhas comidas preferidas: ",comidasPreferidas[4]) */

//letra c obs.(tentei pelo replaceAll mas não obtive sucesso, vim por outro meio como visto no de interpretação que dá pra fazer de outreas maneiras)
/* const novaComidaPreferida = prompt("Digite sua comida Preferida")
comidasPreferidas[1] = novaComidaPreferida
console.log(comidasPreferidas) */

// Questão 03
//letra a
/* const listaDeTarefas = [];
console.log(listaDeTarefas)

//letra b
const tarefa1 = prompt("Digite uma tarefa sua diária")
const tarefa2 = prompt("Digite outra tarefa sua diária")
const tarefa3 = prompt("Digite mais uma tarefa sua diária")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

//letra c
console.log(listaDeTarefas)

//letra d
const escolha = prompt("Digite um número de 1 a 3")
console.log(listaDeTarefas[escolha-1])

//letra e
listaDeTarefas.splice(escolha-1, 1)

//letra f
console.log(listaDeTarefas) */

//Desafios
// Questão 01
/* const frase = prompt("Digite uma frase")
const arrayReturn = frase.split(" ")
console.log(arrayReturn) */

// Questão 02
/* const listaDeFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const indiceAbacaxi = listaDeFrutas[2]
console.log(indiceAbacaxi,indiceAbacaxi.length) */


