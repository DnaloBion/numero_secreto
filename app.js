let maxNumber = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;
console.log(numeroSecreto);

function screenText(field, text){
    let campo = document.getElementById(field);
    campo.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female',{rate:1.2})
}

function verificarChute(){
    let chute = document.getElementById('chute').value;
    if(chute == numeroSecreto){
        let textoTentativas = tentativas > 1 ? 'tentativas' : 'tentativa' ;
        let reIniciar =  document.getElementById('reiniciar').removeAttribute('disabled');
        screenText('title', `Acertou!`);
        screenText('paragraph', `Parabéns você acertou o número secreto com ${tentativas} ${textoTentativas}!`);
    }else{
        if(chute > numeroSecreto){
            screenText('paragraph', `O número secreto é MENOR que ${chute}.`)
        }else{
            screenText('paragraph', `O número secreto é MAIOR que ${chute}.`)
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumero(){
    return parseInt(Math.random() * maxNumber + 1);
}

function limparCampo(){
    chute = document.getElementById('chute').value = "";
}

function newGame(){
    location.reload();
}

screenText('title', 'Número Secreto');
screenText('paragraph', `Escolha um número de 1 a ${maxNumber}`);