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
function posicaoRandomica(){
    var posicaoX=Math.floor(Math.random()*largura);
    var posicaoY=Math.floor(Math.random()*altura);
    console.log(posicaoX,posicaoY)

    /*criar o nosso mosquito (
        elemento HTML) no DOM*/
        var mosquito=document.createElement('img')
        mosquito.src='../imagens/mosquito.png';
        document.body.appendChild(mosquito);
        mosquito.setAttribute('class','mosquito1')
    }
posicaoRandomica()