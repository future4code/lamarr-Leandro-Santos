// Projeto Blackjack

console.log("Boas vindas ao jogo de Blackjack! 🃏🎴") // Questão 1

const carta = comprarCarta();     
// console.log(carta.texto) 
// console.log(carta.valor)

// pergunta inicial
let decisao = confirm ("Quer iniciar uma nova rodada?") // Questão 2

// Questão 3 e 4 será no if...else
// Questão 5 invocar/chamar function pronta que seleciona 2 cartas para cada jogador
let cartaUsuario1 = comprarCarta()
let cartaUsuario2 = comprarCarta()

let cartaComputador1 = comprarCarta()
let cartaComputador2 = comprarCarta()

let pontosTotaisUser = (cartaUsuario1.valor + cartaUsuario2.valor) 
let pontosTotaisPC = (cartaComputador1.valor + cartaComputador2.valor)

// escolhas do if...else
if (decisao) {
   console.log(`Usuário - Cartas: ${cartaUsuario1.texto} e ${cartaUsuario2.texto} -> Pontuação Usuário = ${pontosTotaisUser}`)
   console.log(`Computador - Cartas: ${cartaComputador1.texto} e ${cartaComputador2.texto} -> Pontuação Computador = ${pontosTotaisPC}`)

 if (pontosTotaisUser > pontosTotaisPC) {
   console.log("O Usuário ganhou!")
} else if (pontosTotaisUser == pontosTotaisPC) {
   console.log("Empate!")
} else if (pontosTotaisUser < pontosTotaisPC) {
   console.log("O Computador ganhou!")
}
} else {
   console.log("O jogo acabou!")
   
}


   






