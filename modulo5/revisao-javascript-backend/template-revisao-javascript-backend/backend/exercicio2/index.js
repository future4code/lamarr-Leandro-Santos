// Exercício Parte 2

let clients = [
  { id: 1, nome: "Fulano" },
  { id: 2, nome: "Ciclano" },
  { id: 3, nome: "Beltrano" },
  { id: 4, nome: "Fulana" },
];

newClient = { id: 3, nome: "Leandro" };

//Validação clientes no array

clients.forEach(object =>{
  if(object.id === newClient.id){
    // console.log(clients);
    console.log(`Erro. Parâmetro inválido, o  "id" já existe`)
  } else{
    clients.push(newClient)
   
  }
});

// Tabuada e validação
// tabledNumber = "5";

// if (tabledNumber === String(tabledNumber))
//   console.log(`Erro. Parâmetro inválido (deve ser digitado um número).`);
// else if (tabledNumber > 10)
//   console.log("Erro. Parâmetro inválido (número precisa valer entre 1 e 10).");
// else {
//   for (let i = 0; i <= 10; i++) {
//     console.log(`${i} x ${tabledNumber} = ${i * tabledNumber}`);
//   }
// }
