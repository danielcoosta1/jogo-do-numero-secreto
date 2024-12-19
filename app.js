let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    
    campo.innerHTML = texto;
    //o responsiveVoice(pode pesquisar na net) disponibiliza uma voz para incrementar
    //o jogo, você pode escolher o tipo de voz que quer(tem a lista no site)
    
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    //essa função só foi possivel devido ao codigo front end - html: no script 
    //parametros: texto que já existia na função , tipo de voz que quer, velocidade da voz
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(numeroSecreto == chute){

    exibirTextoNaTela('h1', 'Parabéns!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativas);

    //caso o usuario acerte, o botão 'novo jogo' deve habilitar
    //então, dentro do if:

    document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior!');
        }

        tentativas ++;
        limparCampo();  //quando clicar no botão chutar: vai percorrer toda a função
                        //e no fim vai chamar a limparCampo
    }
  
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);// vão ser sorteados 3 numeros
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    
    if(quantidadeDeElementosNaLista == numeroLimite){ //se a lista já tiver com os 3:
        listaDeNumerosSorteados = []; //vai limpar a lista
    }
    
    
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){ 
    //.includes() verifica se o array contem um determinado elemento

        return gerarNumeroAleatorio(); 
        //ele vai retornar um novo numero, caso o if for true(o numero ja existe no array)
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido); 
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input'); 
//chute é o espaço onde o usuário vai colocar o número

    chute.value ='';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); 
    //habilitou novamente o botão(novo jogo)
}








