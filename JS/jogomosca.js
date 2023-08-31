function SelecaoDificuldade(){
    dificuldade = (document.getElementById('dificuldades').value);
    if(dificuldade == '1'){
        sessionStorage.setItem('tempoJogo','20')
        sessionStorage.setItem('tempoMosca','5')
        sessionStorage.setItem('moscas','3')
    }
    if(dificuldade == '2'){
        sessionStorage.setItem('tempoJogo','14')
        sessionStorage.setItem('tempoMosca','2')
        sessionStorage.setItem('moscas','5')
    }
    if(dificuldade == '3'){
        sessionStorage.setItem('tempoJogo','10')
        sessionStorage.setItem('tempoMosca','1')
        sessionStorage.setItem('moscas','9')
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

cronometro = setInterval(function(){
    
    },1000)
    

//captar informações de sessionstorage
let tempoJogo = sessionStorage.getItem('tempoJogo')
let tempoMosca = sessionStorage.getItem('tempoMosca')
let moscas = parseInt(sessionStorage.getItem('moscas'))

var vida=4;
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
    var posicaoX=Math.floor(Math.random()*(largura-140));
    var posicaoY=Math.floor(Math.random()*(altura-140));

    /*criar o nosso mosquito (
        elemento HTML) no DOM*/
        var mosquito=document.createElement('img');
        mosquito.src='../imagens/mosquito.png';
        document.body.appendChild(mosquito);
        mosquito.className=tamanhoAleatorio()+' '+ladoAleatorio();
        mosquito.style.position='absolute'
        mosquito.style.left=posicaoX+'px'
        mosquito.style.top=posicaoY+'px'
        mosquito.setAttribute('onclick','mataMosca()')
        mosquito.setAttribute('id','mosquito')
}

/*Tamanho do penilongo*/
function tamanhoAleatorio(){
    var classe=Math.floor(Math.random()*3)
    switch(classe){
    case 0:
        return 'mosquito1'
    case 1:
        return 'mosquito2'
    case 2: 
        return 'mosquito3'
    }
    /* Utilizando a seguinte formula há uma maior
    variedade de tamanho de moscas
    var tamanho=Math.floor(Math.random()*(140))
    if(tamanho < 75){
        tamanhoAleatorio()
    }else{
    document.getElementById('mosquito1').style.height=tamanho+'px'
    }*/
}

function ladoAleatorio(){
    var lado=Math.floor(Math.random()*2)
    if(lado == 0){
        return 'ladoA'
    }else{
        return 'ladoB'
    }
}


function mataMosca(){
    document.getElementById('mosquito').remove()
    moscas = moscas - 1
    if(moscas==0){
        window.location.href='../vitoria.html'
    }
}

function iniciarJogo(){
    setInterval(function(){
        document.getElementById('contador').innerHTML=tempoJogo;
        if(tempoJogo == 0){
            window.location.href='../gameover.html'
        }
         if(tempoJogo % tempoMosca == 0 || tempoJogo == tempoMosca){
            if(document.getElementById('mosquito')){
                document.getElementById('mosquito').remove();
                vida--;
                if(vida == 3){
                    coracao = document.getElementById('coracao3').src='../imagens/coracao_vazio.png'
                }   
                if(vida == 2){
                    coracao = document.getElementById('coracao2').src='../imagens/coracao_vazio.png'
                }     
                if(vida == 1){
                    coracao = document.getElementById('coracao1').src='../imagens/coracao_vazio.png'
                }            
                if(vida == 0){
                    window.location.href='../gameover.html'
                }   
            }
                posicaoRandomica();
        }
        tempoJogo--;
    },1000)
}

/*
function iniciarJogo(){
    setInterval(function(){
        document.getElementById('contador').innerHTML=segundo;
        segundo--;
        tempodetela++;
        if(tempodetela == 5 && document.getElementById('mosquito')){
            document.getElementById('mosquito').remove();
            tempodetela = 1;
            vida = vida - 1
            if(vida == 2){
                coracao = document.getElementById('coracao3')
                coracao.setAttribute('id','coracaovazio')
            }   
            if(vida == 1){
                coracao = document.getElementById('coracao2')
                coracao.setAttribute('id','coracaovazio')
            }            
            if(vida == 0){
                window.location.href='../gameover.html'
            }   
        }
        if(tempodetela == 1){
            posicaoRandomica();
        }
    },1000)
}*/