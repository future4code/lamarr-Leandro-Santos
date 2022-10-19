//Exercício 4
//letra a
type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}
//letra b => cria um script para transpilar:  "exercicio-4": "tsc && node ./build/exercicio-4.js"

//letra c => vai diferenciar o caminho a ser lido para a transpilação, sempre regular de acordo com o caminho

//letra d => Podemos rodar o comando tsc para transpilar vários arquivos ao colocar seus nomes separados por um espaço. Exemplo: tsc arquivo1.ts arquivo2.ts arquivo3.ts