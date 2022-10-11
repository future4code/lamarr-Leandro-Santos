console.log("exercicio 4");

const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]

// const geraItensUnicos = primeiraLista.concat(segundaLista)
// console.log(geraItensUnicos);

const listaUnica = primeiraLista.concat(segundaLista);
const geraItensUnicos = new Map();

listaUnica.forEach((lista) =>{
    if (!geraItensUnicos.has(lista.nome)){
        geraItensUnicos.set(lista.nome, lista);
    }
});
console.log([...geraItensUnicos.values()]);