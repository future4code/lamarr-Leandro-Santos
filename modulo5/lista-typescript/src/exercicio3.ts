//EXERCICIO 03

enum GENERO {
  ACAO = "Ação",
  DRAMA = "Drama",
  COMEDIA = "Comédia",
  ROMANCE = "Romance",
  TERROR = "Terror",
}

type Filme = {
  nome: string;
  anoLancamento: number;
  genero: GENERO;
  pontuacao?: number;
};

const filmes = () => {
  const filme: Filme  = {
    nome: "Creed",
    anoLancamento: 2018,
    genero: GENERO.ACAO,
    pontuacao: 8,
  };

  return filme;
};

console.table(filmes());
