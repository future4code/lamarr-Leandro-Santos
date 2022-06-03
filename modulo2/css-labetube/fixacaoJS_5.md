```javascript
function criarArrayNomesAnimais() {
  const animais = [
    { nome: 'Cachorro', classificacao: 'mamífero' },
    { nome: 'Papagaio', classificacao: 'ave' },
    { nome: 'Gato', classificacao: 'mamífero' },
    { nome: 'Carpa', classificacao: 'peixe' },
    { nome: 'Pomba', classificacao: 'ave' }
  ]
  // Escreva seu código aqui
  let nomeDosAnimais = animais.map(nomeDosAnimais => {
    return nomeDosAnimais.nome
  })
  return nomeDosAnimais
}
```
