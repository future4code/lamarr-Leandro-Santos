//Exercícios de interpretação de código

// Questão 01
//letra a => Será impreso no primeiro console exibira o primeiro nome do Array, posição zero, que é o "Mathes Nachtergaele" // No segundo console, irá exibir o último nome do array elenco, que é "Virginia Cavendish" e no útlimo console, irá exibir o último objeto, posição 2, que é o {canal: "Globo", horario: "14h"}

// Questão 02
//letra a => No primeiro console será impresso o objeto cachorro, no segundo, por ter uma cópia do objeto cachorro, será impresso no console a cópia com a ateração do nome, ou seja, o nome será Juba e no último console será impresso a cópia do objeto gato, com a alteração do nome novamente, desta vez ao invés de Juba será impresso Jubo, por ter o método replaceAll alterando o "a" pelo "o"

//letra b => É a spread, onde ela faz uma cópia do objeto e/ou array, podendo realziar alteração de valores e acrescimo de novos valores e chaves, sendo muito útil no dia a dia

// Questão 03
//letra a => No primeiro console será impresso false, por ser o valor da key backender, no segundo retornará undefined, pois no objeto pessoa não possua nenhuma key denominada altura.

//letra b => Acontece esses retornos da letra a em virtude de no return ser especificado, por meio da escolha, de ser mostrado do objeto o valor propriedade, onde que como está dentro da function, é chamado, o objeto no console, seguido da chave para return da propriedade desta chave.

// Exercícios de escrita de código

// Questão 01 
//letra a 

//  const aluno = {
//   nome: "Leandro", 
//   apelidos: ["Leo", "Giga", "Leandrinho"]
// }

// function imprimeFrase() {
//   const frase = `Eu sou ${aluno.nome}, mas pode me chamar de: ${aluno.apelidos[0]}, ${aluno.apelidos[1]} ou ${aluno.apelidos[2]}`

//   return frase 
  
// }

// console.log(imprimeFrase())

// //letra b
// const novoAluno = {
//   ...aluno,
//   apelidos: ["Leandrinho", "Giga", "Leo"]
// }

// console.log(`Eu sou ${novoAluno.nome}, mas pode me chamar de: ${novoAluno.apelidos[0]}, ${novoAluno.apelidos[1]} ou ${novoAluno.apelidos[2]}`)

// Questão 02

/* let pessoa1 = {
  nome: "Leandro", 
  idade: 26, 
	profissao: "Aluno"
}
let pessoa2 = {
  nome: "Gui", 
  idade: 30, 
	profissao: "Instrutor"
}

function pessoas(pessoinhas) {
 let array = [pessoinhas.nome, pessoinhas.nome.length, pessoinhas.idade, pessoinhas.profissao, pessoinhas.profissao.length]

 return array

}
console.log(pessoas(pessoa1))
console.log(pessoas(pessoa2)) */


// Questão 03
//letra a
/* let carrinho = []

//letra b
let fruta1 = {
  nome: "pera", 
  disponibilidade: true, 
	}
  let fruta2 = {
    nome: "maçã", 
    disponibilidade: true, 
    }
    let fruta3 = {
      nome: "mamão", 
      disponibilidade: true, 
      }

// letra c
function sacolao (){
 carrinho.push(fruta1)
 carrinho.push(fruta2)
 carrinho.push(fruta3)

return carrinho
}

console.log(sacolao()) */






//Desafios


// Questão 01
/* let nome = prompt("Qual seu nome?")
let idade = Number(prompt("Qual sua idade?"))
let profissao = prompt("Qual sua profissão?")

function objetoUsuario(){
  const imprimeInformacoesUsuario = {
    nome:nome,
    idade:idade,
    profissao:profissao
  }
  return imprimeInformacoesUsuario
}

console.log(objetoUsuario()) */

// Questão 2

/* const filme1 = {
  nome: "Vingadores - Ultimato", 
  anoDeLançamento: 2019
	}

const filme2 = {
    nome: "Guardiões da Galáxia", 
    anoDeLançamento: 2014
}


function filmes() {
  const pergunta1 = filme1 > filme2
  const pergunta2 = filme1.anoDeLançamento === filme2.anoDeLançamento

  return pergunta1, pergunta2
}
 */

//Não deu pelo horário ter4minar o desafio, mas farei depois a complementação do mesmo finalizando as duas últimas questões


























