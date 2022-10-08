// Exercício Parte 3
console.log("Exercício Parte 3");

const accounts = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	// {
	// 	email: "bananinha@gmail.com",
	// 	password: "bananinha"
	// }
]
accounts.email.includes("astrodev@labenu.com")

if (accounts.email.includes("astrodev@labenu.com")) {
	console.log("login bem-sucedido");
} else {
	console.log("e-mail ou senha incorretos");
}