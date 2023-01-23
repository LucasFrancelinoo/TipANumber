function verificarSeNumeroValido(chute) {
    const numero = +chute
  
    if (chuteInvalido(numero)) {
      elementoChute.innerHTML += '<div id="size" >Valor inválido</div>'
      return
    } 

    if (seNumeroMenorOuMaior(numero)) {
      elementoChute.innerHTML +=`<div>Valor invalido: o número secreto deve estar entre ${menorValor} e ${maiorValor}</div>`
      return
    }

    if (numero === numeroSelecionado) {
      document.body.innerHTML = `
        <h2> Você acertou!</h2>
        <h4>O numero secreto era: </h4> <span class="number">${numeroSelecionado}</span>
        <button id="restart"> Reiniciar Jogo </button>
      `
    } else if (numero > numeroSelecionado) {
      elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div> '
    } else {
      elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div> '
    }
}

function seNumeroMenorOuMaior(numero) {
  return numero > maiorValor || numero < menorValor 
}

function chuteInvalido(numero) {
  return isNaN(numero)
}

document.body.addEventListener('click', e => {
  if(e.target.id == 'restart') {
    window.location.reload();
  }
})
