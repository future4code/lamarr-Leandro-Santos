//EXERCICIO 03

enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

type Filme = {
  nome: string;
  anoLancamento: number;
  genero: GENERO;
  pontuacao?: number;
};
const filmes = () => {
  const filme1: Filme = {
    nome: "Creed",
    anoLancamento: 2018,
    genero: GENERO.ACAO,
    pontuacao: 8
  };

  return filme1
};

console.log( filmes());


// const filme2 = {
//   nome: "Auto da compadecida",
//   anoLancamento: 2018,
//   genero: GENERO.COMEDIA
// }
// const filme3 = {
//   nome: "Creed no drama",
//   anoLancamento: 2018,
//   genero: GENERO.DRAMA
// }
// const filme4 = {
//   nome: "Amor",
//   anoLancamento: 2006,
//   genero: GENERO.ROMANCE
// }
// const filme5 = {
//   nome: "Telefone Preto",
//   anoLancamento: 2022,
//   genero: GENERO.TERROR
// }
