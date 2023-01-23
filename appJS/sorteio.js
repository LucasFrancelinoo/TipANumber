const menorValor = 1
const maiorValor = 1000
const numeroSelecionado = gerarNumero()


function gerarNumero(){
  return parseInt(Math.random() * maiorValor + 1)
}

var menorElemento = document.getElementById('menor-valor')
menorElemento.innerHTML = menorValor

var maiorElemento = document.getElementById('maior-valor')
maiorElemento.innerHTML = maiorValor


console.log('Número Secreto:' , numeroSelecionado)