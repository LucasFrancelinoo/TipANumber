const elementoChute = document.getElementById('chute');

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

const onSpeak = function aoFalar(e) {
  chute = e.results[0][0].transcript
  exibirChute(chute);
  verificarSeNumeroValido(chute);
}

recognition.addEventListener('result', onSpeak)

function exibirChute(chute) {
  elementoChute.innerHTML = `
    <div>Você disse:<div/>
    <span class="box" >${chute}<span/>
  `
}

recognition.addEventListener('end', () => recognition.start())