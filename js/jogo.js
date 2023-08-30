//vamos descobrir o tamanho 
//da nossa página
var altura=0;
var largura=0;
function ajustaTamanhoPalco(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}

ajustaTamanhoPalco()
console.log(altura, largura);

moscas = 5
//vamos criar uma posição 
//randomica para o mosquito
function posicaoRandomica(){
    var posicaoX=Math.floor(Math.random()*(largura-100));
    var posicaoY=Math.floor(Math.random()*(altura-100));
    console.log(posicaoX,posicaoY)

    /*criar o nosso mosquito (
        elemento HTML) no DOM*/
        var mosquito=document.createElement('img');
        mosquito.src='../imagens/mosquito.png';
        document.body.appendChild(mosquito);
        mosquito.setAttribute('id','mosquito1');
        document.getElementById('mosquito1').style.position='absolute'
        document.getElementById('mosquito1').style.left=posicaoX+'px'
        document.getElementById('mosquito1').style.top=posicaoY+'px'
        mosquito.setAttribute('onclick','checagem()');
    }
posicaoRandomica()

function checagem(){
    if(moscas != 1){
    document.getElementById('mosquito1').remove();
    moscas--;
    posicaoRandomica()
    }else{
        window.location.href='../vitoria.html'
    }
}