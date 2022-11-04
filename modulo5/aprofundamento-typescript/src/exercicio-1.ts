//Exercício 01
//letra a
//const minhaString: string  = 5
// ela não aceita pois o Type está pedindo uma string e não um valor number

//letra b
// const meuNumero: string | number = "teste";
//usar o tipo Union Type para aceitar number e string

// letra d
enum ColourType {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  AZULESCURO = "Azul escuro",
  VIOLETA = "Violeta",
}

//leytra c
type Person = {
  name: string;
  age: number;
  favouriteColour: string;
};

const pessoa1: Person = {
  name: "Gui",
  age: 25,
  favouriteColour: ColourType.AZUL,
};

const pessoa2: Person = {
  name: "Vitim",
  age: 25,
  favouriteColour: ColourType.VERMELHO,
};

const pessoa3: Person = {
  name: "Leo",
  age: 27,
  favouriteColour: ColourType.VERDE,
};

console.table(pessoa3);

