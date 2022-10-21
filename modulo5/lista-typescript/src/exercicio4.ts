enum SETORES {
  MARKETING = "Marketing",
  VENDAS = "vendas",
  FINANCEIRO = "Financeiro",
}

type Colaborador = {
  nome: string;
  salário: number;
  setor: SETORES;
  presencial: boolean;
};
const colaboradores: Colaborador[] = [
  {
    nome: "Marcos",
    salário: 2500,
    setor: SETORES.MARKETING,
    presencial: true,
  },
  {
    nome: "Maria",
    salário: 1500,
    setor: SETORES.VENDAS,
    presencial: false,
  },
  {
    nome: "Salete",
    salário: 2200,
    setor: SETORES.FINANCEIRO,
    presencial: true,
  },
  {
    nome: "João",
    salário: 2800,
    setor: SETORES.MARKETING,
    presencial: false,
  },
  {
    nome: "Josué",
    salário: 5500,
    setor: SETORES.FINANCEIRO,
    presencial: true,
  },
  {
    nome: "Natalia",
    salário: 4700,
    setor: SETORES.VENDAS,
    presencial: true,
  },
  {
    nome: "Paola",
    salário: 3500,
    setor: SETORES.MARKETING,
    presencial: true,
  },
];

function buscarPorSetor(funcionarios: Colaborador[]): Colaborador[] {
  const filtros: Colaborador[] = funcionarios.filter((item: Colaborador) => {
    return item.presencial === true && item.setor === "Marketing";
  });
  return filtros;
}

console.table(buscarPorSetor(colaboradores));
