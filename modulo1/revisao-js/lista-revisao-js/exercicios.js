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

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
const ordenado = array.sort(function(a,b){
  return a-b
})
 return ordenado
}
retornaArrayOrdenado()

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  function pares(array){
    return array % 2 ===0
  }
let numPares = array.filter(pares)
return numPares
  
}
retornaNumerosPares()



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
retornaObjetoEntreDoisNumeros()


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
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}