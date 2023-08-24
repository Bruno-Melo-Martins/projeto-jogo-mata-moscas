function IniciarJogo(){
    aviso = 5
    dificuldade = document.getElementById('dificuldades').value;
    if(dificuldade == '0'){
        x = setInterval(function(){
            document.getElementById('aviso').style.backgroundColor='brown'
            document.getElementById('aviso').style.color='white'
            document.getElementById('aviso').innerHTML='Escolha uma dificuldade!';
            i--;
            if(i==0){
                clearInterval(x);
            }
        },1000)
        x = setTimeout(function(){
            document.getElementById('aviso').style.backgroundColor='transparent';
            document.getElementById('aviso').style.color='transparent';
        },1000)
    }else{
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
    window.location.href='../jogomosca.html'
    }
}

function Iniciar(){
    const dive = document.getElementById('adviso');
    dive.remove()
    alert('ois')
}
