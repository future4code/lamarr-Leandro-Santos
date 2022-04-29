//Exercícios de interpretação de código

// Questão 01
//letra a => O código realiza o teste do comparador de resto de divisão, onde que dependendo do número que o usuário digitar, irá ou não passar no teste, se for número par, passa no teste, senão, não passa
// letra b => Imprime "Passou no teste" números pares
// letra c => Imprime "Passou no teste" números ímpar

// Questão 02
//letra a => Como o enunciado já diz, é um automatizador alguma tarefas, por meio do switch, que irá fazer uma pergunta e rodar o códiugo, parando (pelo break) ao localizar a resposta, senão, retorna o default
// letra b => "O preço da fruta Maçã é R$ 2.25"
// letra c => Ao retirar o break, o código, não irá parar e irá ler o proximo item, que no caso é default, imprimindo a mensagem da pera e o valor R$ 5, ppois vai apresentar não o preço da Pêra, mas o último preço lido que esta no default

// Questão 03
//letra a => Solicitando ao usuário que digite um número por meio do prompt
// letra b => Ao digitar 10 retornará a mensagem "Esse número passou no teste", por ser maior que 0, se for -10 não retornará nenhuma mensagem pois não foi especificado o else no código
// letra c => O erro é ter deixado o console.log(mensagem) de fora do bloco, não ativando a let mensagem, poderia ainda ter usado com a function para dá mais sentido. Pode-se considerar ainda o erro e/ou omissão, da falta do Else para justificar o não retorno de mensaem em números menores de 0 e/ou iguais a 0

// Exercícios de escrita de código
// Questão 01
//letras "a" à "c"

/* let idade = Number(prompt("Digite sua idade"))

const cnh = (number1, number2) =>{
let idadeRecebida = idade
  
if (idadeRecebida >= 18) {
  return ("Você pode dirigir! 😀")
 } else{
   return("Você não pode dirigir! ☹️")
}

 }
console.log(cnh())  */

// Questão 02
/* let turno = prompt("Olá! Nos diga qual turno você estuda: Digite M para (Matutino), V para (Vespertino) ou N para(Noturno).")

const turnoAluno = (turno) =>{
  
if (turno === "M") {
  return ("Bom Dia!")
 } else if (turno === "V") {
    return ("Boa Tarde!")
   } else{
     return ("Boa Noite!")
   }
 }
console.log(turnoAluno(turno)) */

// Questão 03
/* let turno = prompt("Olá! Nos diga qual turno você estuda: Digite M para (Matutino), V para (Vespertino) ou N para(Noturno).")

switch (turno) {
  case "M":
    console.log("Bom Dia!")    
    break;

  case "V":
    console.log("Boa Tarde!")    
    break;

  case "N":
    console.log("Boa Noite!")    
    break;

  default:
    console.log("Escolha a opção correta: Digite M para (Matutino), V para (Vespertino) ou N para(Noturno).")
    break;
} */

// Questão 04

/* let generoFilme = prompt("Qual o gênero de filme que vocês vão assistir?")
let precoIngresso = Number(prompt("Qual o preço do ingresso?"))

const comparar = (generoFilme, precoIngresso) =>{
  
if (generoFilme === "Fantasia" && precoIngresso < 15) {
  return ("Bom filme! 😀🎥")
 } else{
   return("Escolha outro filme! ☹️")
}

 }
console.log(comparar(generoFilme, precoIngresso)) */




//Desafios
// Questão 01
/* let generoFilme = prompt("Qual o gênero de filme que vocês vão assistir?")
let precoIngresso = Number(prompt("Qual o preço do ingresso?"))
let lanche =  prompt("Qual lanchinho vocês irão comprar? Digite: Pipoca, Chocolate ou Salgado")


const cinema = (generoFilme, precoIngresso, lanche) =>{
  
if (generoFilme === "Fantasia" && precoIngresso < 15) {
  return (`Bom filme! 😀🎥  Aproveite o seu/sua ${lanche}`)
 } else if (generoFilme === "Fantasia" && precoIngresso < 15 && lanche === "Pipoca" && "Chocolate" && "Salgados"){
  return (`Bom filme! 😀🎥  Aproveite o seu/sua ${lanche}`)
 }else{
  return("Escolha outro filme! ☹️")
 }
}
console.log(cinema(generoFilme, precoIngresso, lanche)) */

// Questão 02

// let nomeCompleto = prompt("Digite seu Nome completo")
// let tipoDeJogo =  prompt("Digite o Tipo de jogo: (IN) para Internacional ou (DO) Doméstico")
// let etapaDoJogo =  prompt("Digite a Etapa do jogo: SF para Semi-Final, DT para Decisão de Terceiro Lugar e FI para Final")
// let categoria =  Number(prompt("Digite uma das opções: 1, 2, 3 ou 4"))
// let quantidadeDeIngressos =  prompt("Digite a quantidade de ifngressos")

//...









