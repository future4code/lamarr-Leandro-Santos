// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()  

    //Desafio da questão 02
    // let arrayInvertido = []    
    // for(let i= array.length; i >= 1; i --)
    // arrayInvertido[array.length - i] = array[i-1]
    // return arrayInvertido

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
const ordenado = array.sort(function(a,b){
  return a-b
})
 return ordenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  function pares(array){
    return array % 2 ===0
  }
let numPares = array.filter(pares)
return numPares

}



// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
let arrayPares = []
for (let numero of array) {
  if (array.length >=0) {
    if (numero % 2 === 0) {
      arrayPares.push(numero**2)
    }
  }
}
return arrayPares
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let numMaior = 0;
  for (let i = 0; i < array.length; i++) {
    let numeros = array[i];
    if (numeros > numMaior) {
      numMaior = array[i]
    }
  }
  return numMaior
  
}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let objeto = {
  maiorNumero: Math.max(num1, num2),
  maiorDivisivelPorMenor: Math.max(num1, num2) % (Math.min(num1, num2)) === 0,
  diferenca: (Math.max(num1, num2) - (Math.min(num1, num2)))
 }
 
 return objeto
}



// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
 let primeirosPares= []
 for (let i = 0; primeirosPares.length < n; i++) {
   if (i % 2 === 0) {
     primeirosPares.push(i);
   }
   
  }
  return primeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  let triangulo
  if (ladoA === ladoB && ladoB === ladoC && ladoA === ladoC ){triangulo = "Equilátero"}
  else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){triangulo = "Escaleno"}
  else{ triangulo = "Isósceles"}

  return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
function compareNumbers(a, b) {
  return a - b;
}
array.sort(compareNumbers)

let segundoMaior = array[array.length-2]
let segundoMenor = array[1]

return [segundoMaior, segundoMenor]

}



// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
 
  //  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

     return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let novaPessoa = { ...pessoa,
    nome: "ANÔNIMO",
    }
  return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  return pessoas.filter(pessoa => {
    return(
      pessoa.altura >= 1.5 && pessoa.idade >= 15 && pessoa.idade < 60
    )    
  })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  return pessoas.filter(pessoa => {
    return(
      pessoa.altura <= 1.5 || pessoa.idade < 15 || pessoa.idade > 60
    )    
  })
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  // let soma = contas.reduce(function(acumulator, valorTotal) {
  //     return acumulator + valorTotal.compras;
  //   },0)
  //   console.log(soma);  
  //   return soma  
  function somaNumeros(numeros) {
    let soma = 0;
    for(let i = 0 ; i < numeros.length ; i++) {
      soma += numeros[i]
    } return soma
  }
  console.log((contas[0].compras))
}




// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  const ordenado = consultas.sort(function(a,b){
    if (a.nome > b.nome) {
      return 1;
    }
    if (a.nome < b.nome) {
      return -1;
    }
  })
  return ordenado
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  // const ordenado = consultas.sort(function(a,b){
  //   if (a.dataDaConsulta < b.dataDaConsulta) {
  //     return 1;
  //   }
  //   if (a.dataDaConsulta > b.dataDaConsulta) {
  //     return -1;
  //   }
  // }) 
const ordenado = (function(a,b){
  if (a.dataDaConsulta > b.dataDaConsulta) {
    
   return consultas.sort(ordenado)
  }

})

}