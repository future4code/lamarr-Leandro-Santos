// Exercício Parte 2

let clients = [
  { id: 1, nome: "Fulano" },
  { id: 2, nome: "Ciclano" },
  { id: 3, nome: "Beltrano" },
  { id: 4, nome: "Fulana" },
];

newClient = { id: 5, nome: "Leandro" };
console.log(clients);
//Validação clientes no array

if (newClient.id === clients.id) {
  console.log(`Erro. Parâmetro inválido, o  "id" já existe`);
} else {
  clients.push(newClient);
}

// Tabuada 

let tabledNumber = (5)
for(let i = 0; i <= 10; i++){
  console.log(`${i} x ${tabledNumber} = ${i*tabledNumber}`);

}