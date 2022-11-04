//EXERCICIO 07

type Produtos = {
  nome: string;
  quantidade: number;
  valorUnitario: string;
};
const ajustaPreco = (estoque: number) => {
  const valorAjustado: string = estoque.toFixed(2).replace(".", ",");
  return "R$ " + valorAjustado;
};

const estoque = () => {
  const estoque: Produtos[] = [
    {
      nome: "MacMugffin",
      quantidade: 37,
      valorUnitario: ajustaPreco(51.04),
    },
    {
      nome: "Vassoura voadora",
      quantidade: 56,
      valorUnitario: ajustaPreco(210.0),
    },
    {
      nome: "Laço da verdade",
      quantidade: 32,
      valorUnitario: ajustaPreco(571.5),
    },
    {
      nome: "O precioso",
      quantidade: 1,
      valorUnitario: ajustaPreco(9181.923),
    },
    {
      nome: "Caneta de 250 cores",
      quantidade: 123,
      valorUnitario: ajustaPreco(17),
    },
    {
      nome: "Plumbus",
      quantidade: 13,
      valorUnitario: ajustaPreco(140.44),
    },
    {
      nome: "Pokebola",
      quantidade: 200,
      valorUnitario: ajustaPreco(99.9915),
    },
  ];

  function ordenado(a: any, b: any) {
    if (a.quantidade < b.quantidade) return -1;
    if (a.quantidade > b.quantidade) return 1;
    return 0;
  }

  estoque.sort(ordenado);

  return estoque;
};

console.table(estoque());

// OBS.: Não entendi muito bem a pedida do enunciado para o ouput, mas fiz o pedido em relação a adicionar a função ajustaPreco e ordenar por quantidade, só não consegui deixar o valorUnitario como number.
