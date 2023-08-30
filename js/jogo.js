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

//vamos criar uma posição 
//randomica para o mosquito
quantidade = 5
function posicaoRandomica(){
    var posicaoX=Math.floor(Math.random()*(largura - 115));
    var posicaoY=Math.floor(Math.random()*(altura - 115));
    console.log(posicaoX,posicaoY)

    /*criar o nosso mosquito (
        elemento HTML) no DOM*/
        var mosquito=document.createElement('img')
        mosquito.src='../imagens/mosquito.png';
        document.body.appendChild(mosquito);
        mosquito.setAttribute('id','mosquito1')
        mosquito.style.position='relative'
        mosquito.style.top=posicaoY+'px'
        mosquito.style.left=posicaoX+'px'
        mosquito.setAttribute('onclick','remover()')
    }
function remover(){
    if(quantidade != 0){
        quantidade--
    elemento=document.getElementById('mosquito1')
    elemento.remove()
    posicaoRandomica()}else{
        window.location="../vitoria.html"
    }
}