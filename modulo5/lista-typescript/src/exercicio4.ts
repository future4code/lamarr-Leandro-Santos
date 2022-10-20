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

function buscarPorSetor(
  funcionarios: Colaborador[],
  setor?: string,
  presencial?: boolean
): Colaborador[] {
  if (setor === undefined || setor.length === 0 || presencial === true) {
    return funcionarios;
  }
  return funcionarios.filter((setores: Colaborador) => {
    return setores.setor === setor;
  });
}

console.table(buscarPorSetor(colaboradores, "Marketing"));
