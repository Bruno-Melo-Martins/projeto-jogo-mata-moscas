//vamos descobrir o tamanho 
//da nossa página
var altura = 0;
var largura = 0;
var tempo=10;
var vidas=1;
var qualquer = 0;

var cronometro=setInterval(function(){
    tempo=tempo-1;
    document.getElementById('tempo').innerHTML=tempo;
},2000)

function ajustaTamanhoPalco() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}

ajustaTamanhoPalco()
console.log(altura, largura);

//vamos criar uma posição 
//randomica para o mosquito
function posicaoRandomica() {
    var posicaoX = Math.floor(Math.random() * (largura - 100));
    var posicaoY = Math.floor(Math.random() * (altura - 100));
    console.log(posicaoX, posicaoY)

    /*criar o nosso mosquito (
        elemento HTML) no DOM*/

        if(document.getElementById('mosquito')){
            document.getElementById('mosquito').remove();
            if(vidas>3){
                //alert('game over')
                window.location.href="../gameover.html"
            }else{
                document.getElementById('life'+vidas).src="../imagens/coracao_vazio.png"
                vidas++
            }
        }
    var mosquito = document.createElement('img')
    mosquito.src = '../imagens/mosquito.png';
    document.body.appendChild(mosquito);
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()//Tamanho Lado
    mosquito.style.position = 'absolute';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.left = posicaoX + 'px';
    mosquito.id='mosquito';
    document.getElementById('mosquito')
    //true, nao tiver=false
   

    //criar tamanhos aleatorios para o mosquito
    function tamanhoAleatorio() {
        var classe = Math.floor(Math.random() * 3)
        console.log(classe);
        switch (classe) {
            case 0:
                return 'mosquito0'
            case 1:
                return 'mosquito1'
            case 2:
                return 'mosquito2'
        }
    }
    //mudando o lado do mosquito
    //interver a posicao horizontal do mosquito
    function ladoAleatorio() {
        var lado = Math.floor(Math.random() * 2)
        switch (lado) {
            case 0:
                return 'ladoA'
            case 1:
                return 'ladoB'
        }
    }

//quando acontece o click no mosquito
mosquito.onclick=function(){
    //alert('clicou no mosquito!')
    this.remove();
}
    tamanhoAleatorio();
}
posicaoRandomica()