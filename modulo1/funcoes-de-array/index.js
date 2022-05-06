//Exercícios de interpretação de código
// Questão 01 letra a => Será impresso os itens, os index e todo o array de cada objeto que consta dentro dos ojetos do array usuários

// Questão 02 letra a => Será impresso apenas os nomes dos itens que consta dentro dos ojetos array usuários


// Questão 03 letra a => Será impresso todos os itens que não possuírem  nome "Chijo", pois apesar do filter está com nome filtro, há o comp0arador !== 

// Exercícios de escrita de código


// //Questão 01 
// const pets = [
//   { nome: "Lupin", raca: "Salsicha"},
//   { nome: "Polly", raca: "Lhasa Apso"},
//   { nome: "Madame", raca: "Poodle"},
//   { nome: "Quentinho", raca: "Salsicha"},
//   { nome: "Fluffy", raca: "Poodle"},
//   { nome: "Caramelo", raca: "Vira-lata"},
// ]

// // letra a

// const arrayNomesDogs = pets.map((dogs) => {
// return dogs.nome
// })
// console.log(arrayNomesDogs);


// //letra b

// const dogsSalsichas = pets.filter((dogs) => {
//   return dogs.raca === "Salsicha"
//   })
//   console.log(dogsSalsichas);

// //letra c

// let arrayPoodles = pets.filter((dogs) => {
//   return dogs.raca === "Poodle"
//   })

// let nomePoodles = arrayPoodles.map((dogs) => {
//     return dogs.nome
//     })

// // let newArray = nomePoodles

// for (let i = 0; i < nomePoodles.length; i++) {
//  if (nomePoodles >= 0) {
// }
// console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomePoodles[i]}!`)
//   }



// // Questão 02 
// const produtos = [
//   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]


// //letra a
// const arrayNomesProdutos = produtos.map((produto) => {
//   return produto.nome 
//   })
//   console.log(arrayNomesProdutos);

// //letra b

// const precoDesconto = produtos.map((produto) => {
//   let desconto = produto.preco*=0.95
//   arrayComDesconto = [produto.nome, produto.preco]
//   return arrayComDesconto
//   }) 
//   console.log(precoDesconto)

  
// //letra c
// const bebidas = produtos.filter((produto) => {
//   return produto.categoria === "Bebidas"
//   })
//   console.log(bebidas);

//   // letra d
// const produtosYpe = produtos.filter((produto) => {
//   return produto.nome.includes("Ypê")
//   })
//   console.log(produtosYpe);

//   // letra e

//   let mensagemYpe = produtosYpe.map((produto) => {
//     return `Compre ${produto.nome} por ${produto.preco}`
//     })
//   console.log(mensagemYpe);

// // Desafio
// // Questão 01 letra a
// const pokemons = [
//   { nome: "Bulbasaur", tipo: "grama" },
//   { nome: "Bellsprout", tipo: "grama" },
//   { nome: "Charmander", tipo: "fogo" },
//   { nome: "Vulpix", tipo: "fogo" },
//   { nome: "Squirtle", tipo: "água" },
//   { nome: "Psyduck", tipo: "água" },
// ]
   
// const nomesPokemons = pokemons.map((nomes) => {
//   return nomes.nome
//   })
//   console.log(nomesPokemons.sort());

//  // letra b


