function SelecaoDificuldade(){
    dificuldade = (document.getElementById('dificuldades').value);
    if(dificuldade == '1'){
        sessionStorage.setItem('tempoJogo','20')
        sessionStorage.setItem('tempoMosca','5')
        sessionStorage.setItem('moscas','5')
    }
    if(dificuldade == '2'){
        sessionStorage.setItem('tempoJogo','18')
        sessionStorage.setItem('tempoMosca','3')
        sessionStorage.setItem('moscas','6')
    }
    if(dificuldade == '3'){
        sessionStorage.setItem('tempoJogo','16')
        sessionStorage.setItem('tempoMosca','2')
        sessionStorage.setItem('moscas','8')
    }
    if(dificuldade == '4'){
        sessionStorage.setItem('tempoJogo','15')
        sessionStorage.setItem('tempoMosca','1')
        sessionStorage.setItem('moscas','10')
    }
}

function Redirecionar(){
    if(dificuldade == 0){
        document.getElementById('aviso').innerHTML='Insira uma dificuldade válida';
        segundo = 5;
        relogio = setInterval(function desaparecer(){
            segundo--;
            if(segundo==0){
                document.getElementById('aviso').innerHTML='';
                relogio = clearInterval;
            }
        },1000)
    }else{
        window.location.href='../jogomosca.html';
        
    }
}

var altura=0;
var largura=0;
function ajustaTamanhoPalco(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}

ajustaTamanhoPalco()
console.log(altura, largura);

function posicaoRandomica(){
    var posicaoX=Math.floor(Math.random()*(largura-100));
    var posicaoY=Math.floor(Math.random()*(altura-100));

    /*criar o nosso mosquito (
        elemento HTML) no DOM*/
        var mosquito=document.createElement('img');
        mosquito.src='../imagens/mosquito.png';
        document.body.appendChild(mosquito);
        mosquito.setAttribute('id','mosquito1');
        document.getElementById('mosquito1').style.position='absolute'
        document.getElementById('mosquito1').style.left=posicaoX+'px'
        document.getElementById('mosquito1').style.top=posicaoY+'px'
        mosquito.setAttribute('onclick','numeroMosca()')
}

function numeroMosca(){
    if(mosquitos = ''){
        mosquitos = sessionStorage.getItem('moscas')
    }
    mosquitos--;
    document.getElementById('mosquito1').remove();
    if(mosquitos == 0){
        window.location.href='../vitoria.html'
    }
}

var checagem = 50
function iniciarJogo(){
    let tempoJogo = sessionStorage.getItem('tempoJogo')
    let tempoMosca = sessionStorage.getItem('tempoMosca')
    relogio = setInterval(function(){
        document.getElementById('contador').innerHTML=tempoJogo
        tempoJogo--;
        if(checagem == 50){
            posicaoRandomica()
            checagem = 0
        }
        checagem++;
        if(checagem == tempoMosca){
            document.getElementById('mosquito1').remove();
            posicaoRandomica()
            checagem = 0
        }
        if(tempoJogo == 0 || tempoJogo < 0){
            window.location.href='../gameover.html'
        }
    },1000)
}
