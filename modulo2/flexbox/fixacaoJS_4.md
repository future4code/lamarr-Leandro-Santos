 ``` javascript
 let contador = 0
  for (let numero of arrayDeNumeros) {
  if(numero === numeroEscolhido){
    contador ++
  }
} if(contador === 0) {
 return `Número não encontrado`
}
else{
  return `O número ${numeroEscolhido} aparece ${contador}x`
}
}´´´