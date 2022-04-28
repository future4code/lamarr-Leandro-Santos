//Exercícios de interpretação de código

// Questão 01
//letra a ==> Vai ser impresso os valores multiplicados, ou seja, 5*2= 10 e 5*10= 50, pois é a variavel multiplicado pelos valores dados
 //letra b ==> não iria aparecer nada impresso mas ia fazer sua função do mesmo jeiro, ou seja, calcular os valores atribuídos

// Questão 02
//letra a ==> a função captura um texto inserido pelo usuário e repassa o texto em minusculo verificando se há o nome cenoura, caso não, retorna false

//letra b ==> fará a  mesma coisa da letra a, só que desta vez retornará impresso a expressão true, pois no includes, há a informação cenoura que o usuário inseriu


// Exercícios de escrita de código

// Questão 01
//letra a 
/* function frase() {
  let informacoesUsuario = "Eu sou Leandro, tenho 26 anos, moro em Campina Grande - PB e sou estudante."

  console.log(informacoesUsuario)
}
frase() */

//letra b
/* let MeuNome = prompt("Digite o seu nome")
let MinhaIdade = Number(prompt("Digite sua idade"))
let MinhaCidade = prompt("Digite a cidade em que reside")
let MinhaProfissao = prompt("Digite a sua profissão")
function informacoes(nome, idade, cidade, profissao) {
    
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
}

console.log(informacoes(MeuNome, MinhaIdade, MinhaCidade, MinhaProfissao)) */

// Questão 02
//letra a
/* function somar(number1, number2) {
let soma = number1+number2
return soma
}
console.log(somar(55,45)) */

//letra b
/* function verificaNumeros(number1, number2) {
let numero = Boolean(number1 >= number2)
return numero
}
console.log(verificaNumeros(10,5)) */

//letra c
/* function verificaNumero(number1) {
let numero = Boolean(number1 % 2 === 0)
return numero
}
console.log(verificaNumero(2)) */

//letra d  
/* let mensagemUsuario = prompt("Digite uma mensagem")

function receberMensagem(mensagem) {
    let mensagemLength = mensagem.length
    let mensagemUpper = mensagem.toUpperCase()
    console.log(`O tamanho é ${mensagemLength} e em maiúscula fica: ${mensagemUpper}`)
}
receberMensagem(mensagemUsuario) */

// Questão 03
/* let number1 = Number(prompt("Digite um número"))
let number2 = Number(prompt("Digite outro número"))

function matematica(resultados) {
    
  let soma = number1 + number2
  let multiplicacao = number1 * number2
  let subtracao = number1 - number2
  let divisao = number1 / number2

  console.log(`Soma: ${soma}`);
  console.log(`Multiplicação: ${multiplicacao}`);
  console.log(`Subtração: ${subtracao}`);
  console.log(`Divisão: ${divisao}`);
    
}
matematica(number1, number2) */

//Desafios
// Questão 01
//letra a 

/* let lerFrase = (frase) => {

return frase
}
 console.log(lerFrase("Aprender programação é maravilhoso")) */

 //letra b 

/* let valores = (valor1, valor2) => {
let soma = 25 + 25
console.log(soma)
}

valores() */

// Questão 02 

/* let pitagoras = (a, b) => {
let conversao1 = a * a
let conversao2 = b * b
let conversao3 = conversao1 + conversao2
let hip = Math.sqrt(conversao3)
console.log(`O valor da hipotenusa é:`, Math.round(hip))
}
pitagoras(7,24) */


