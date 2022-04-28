// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
<<<<<<< HEAD

=======
const altura = Number(prompt("Digite a altura"))
const largura = Number(prompt("Digite a largura"))

console.log(altura * largura)
>>>>>>> 22fd7ebd6134022aa5721368e68b40a8d2b7492a
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
<<<<<<< HEAD

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

=======
  const anoAtual = prompt("Digite o ano em que estamos.")
  const anoNascimento = prompt("Digite o ano em que nasceu.")

  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso1, altura1) {
  // implemente sua lógica aqui
  const imc = (peso1 / (altura1 * altura1))
  return imc
>>>>>>> 22fd7ebd6134022aa5721368e68b40a8d2b7492a
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
<<<<<<< HEAD
=======
  const nome = prompt("Digite o seu nome.")
  const idade = prompt("Digite a sua idade.")
  const email = prompt("Digite o seu e-mail.")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
>>>>>>> 22fd7ebd6134022aa5721368e68b40a8d2b7492a

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
<<<<<<< HEAD

=======
  const cor1 = prompt("Digite uma cor favorita.")
  const cor2 = prompt("Digite outra cor favorita.")
  const cor3 = prompt("Digite mais uma cor favorita.")

  console.log(Array(cor1, cor2, cor3))
>>>>>>> 22fd7ebd6134022aa5721368e68b40a8d2b7492a
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
<<<<<<< HEAD

=======
  
  return string.toUpperCase();
>>>>>>> 22fd7ebd6134022aa5721368e68b40a8d2b7492a
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

<<<<<<< HEAD
=======
  return (custo / valorIngresso)
>>>>>>> 22fd7ebd6134022aa5721368e68b40a8d2b7492a
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
<<<<<<< HEAD
=======
  return string1.length === string2.length
>>>>>>> 22fd7ebd6134022aa5721368e68b40a8d2b7492a

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

<<<<<<< HEAD
=======
return array [0]
>>>>>>> 22fd7ebd6134022aa5721368e68b40a8d2b7492a
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

<<<<<<< HEAD
=======
return array.pop()
 
>>>>>>> 22fd7ebd6134022aa5721368e68b40a8d2b7492a
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
<<<<<<< HEAD

=======
  let primeiroArray = array[0]
  array[0] = array[array.length -1]

  array[array.length -1] = primeiroArray

  let primeiro = array[0];

  let ultimo = array[array.length - 1];

  return array
  
>>>>>>> 22fd7ebd6134022aa5721368e68b40a8d2b7492a
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
<<<<<<< HEAD
=======
 
  return string1.toUpperCase() === string2.toUpperCase()
>>>>>>> 22fd7ebd6134022aa5721368e68b40a8d2b7492a

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
<<<<<<< HEAD

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

=======
  let anoAtual = Number(prompt("Digite o ano em que estamos."))
  let anoNascimento = Number(prompt("Digite seu ano de nascimento."))
  let anoRG = Number(prompt("Digite o ano de emissão de seu RG."))

  let idade = (ano1, ano2) => ano1 - ano2
  let renovacao = (ano1, ano3) => ano1 - ano3

  function checar(valor1, valor2) {
    let logica1 = ((valor1 <= 20) && (valor2 >= 5)) 
    let logica2 = ((valor1 <= 50) && (valor2 >= 10)) 
    let logica3 = ((valor1 > 50) && (valor2 >= 15)) 

   checar = (logica1 || logica2 || logica3)

    return checar

  }
  console.log(checar(idade(anoAtual,anoNascimento), renovacao(anoAtual, anoRG)))
}


// EXERCÍCIO 14

function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
   let bissexto = (ano % 4 == 0) && ( (ano % 100 != 0) || (ano % 400 == 0) );
   return bissexto
>>>>>>> 22fd7ebd6134022aa5721368e68b40a8d2b7492a
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
<<<<<<< HEAD

=======
  
  let pergunta1 = prompt("Você tem mais de 18 anos? - Sim ou Não")
  let pergunta2 = prompt("Você possui ensino médio completo? - Sim ou Não")
  let pergunta3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso? - Sim ou Não")

   console.log(pergunta1.trim() === "sim", pergunta2.trim() === "sim", pergunta3.trim() === "sim" === true) 
>>>>>>> 22fd7ebd6134022aa5721368e68b40a8d2b7492a
}