function verificaSeOChutePossuiValorValido(chute) {

    const numero = +chute;

    if (chuteForInvalido(numero)) {

        if (chute.toUpperCase() === "GAME OVER") {
            document.body.innerHTML = `
                <h2>GAME OVER</h2>
                <h3>Você finalizou o jogo sem advinhar o número secreto que era "${numeroSecreto}"!</h3>
                <button class="btn-jogar" id="jogar-novamente">Jogar novamente...</button>
            `;
            return;
        } else {
            elementoChute.innerHTML += `<div>Valor inválido! "${chute}" não é um número.</div>`;
            return;
        }
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido! O número precisa estar entre ${menorValor} e ${maiorValor}</div>.`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era "${numeroSecreto}"!</h3>
            <button class="btn-jogar" id="jogar-novamente">Jogar novamente...</button>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
            `;
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
            `;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})
