function SelecaoDificuldade(){
    dificuldade = (document.getElementById('dificuldades').value);
    if(dificuldade == '1'){
        tempoJogo = 20
        tempoMosca = 5
        moscas = 4
    }
    if(dificuldade == '2'){
        tempoJogo = 18
        tempoMosca = 3
        moscas = 6
    }
    if(dificuldade == '3'){
        tempoJogo = 16
        tempoMosca = 2
        moscas = 8
    }
    if(dificuldade == '4'){
        tempoJogo = 15
        tempoMosca = 1.5
        moscas = 10
    }
}

function IniciarJogo(){
    if(dificuldade == 0){
        document.getElementById('aviso').innerHTML='Insira uma dificuldade válida';
        segundo = 5;
        relogio = setInterval(function desaparecer(){
            segundo--;
            if(segundo==0){
                document.getElementById('aviso').innerHTML='';
            }
        },1000)
    }else{
        window.location.href='../jogomosca.html'
    }
}