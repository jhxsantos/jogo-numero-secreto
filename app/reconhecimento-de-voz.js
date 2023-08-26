const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiValorValido(chute);
}

function exibeChuteNaTela(chute) {

    let resultado = "";
    let seta = ""

    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
        <div>${resultado}<i class="${seta}"></i></div>
        `;
}

recognition.addEventListener('end', function() {
    recognition.start();
})
