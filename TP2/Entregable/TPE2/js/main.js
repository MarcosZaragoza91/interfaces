window.addEventListener('load', function (){

    let fondofichaj1='';
    let fondofichaj2='';

document.querySelector('.fondoj1red').addEventListener('click', function (){
    fondofichaj1 = "images/redCoin.png";
    document.querySelector('.fondoj1red').className = 'fichaElegida';
    document.querySelector('.fondoj2red').className='hidden';
})
document.querySelector('.fondoj1blue').addEventListener('click', function (){
    fondofichaj1 = "images/blueCoin.png";
    document.querySelector('.fondoj1blue').className = 'fichaElegida';
    document.querySelector('.fondoj2blue').className='hidden';
})
document.querySelector('.fondoj1green').addEventListener('click', function (){
    fondofichaj1 = "images/greenCoin.png";
    document.querySelector('.fondoj1green').className = 'fichaElegida';
    document.querySelector('.fondoj2green').className='hidden';
})
document.querySelector('.fondoj1brown').addEventListener('click', function (){
    fondofichaj1 = "images/brownCoin.png";
    document.querySelector('.fondoj1brown').className = 'fichaElegida';
    document.querySelector('.fondoj2brown').className='hidden';
})
document.querySelector('.fondoj1grey').addEventListener('click', function (){
    fondofichaj1 = "images/greyCoin.png";
    document.querySelector('.fondoj1grey').className = 'fichaElegida';
    document.querySelector('.fondoj2grey').className='hidden';
})
document.querySelector('.fondoj2red').addEventListener('click', function (){
    fondofichaj2 = "images/redCoin.png";
    document.querySelector('.fondoj2red').className = 'fichaElegida';
    document.querySelector('.fondoj1red').className='hidden';
})
document.querySelector('.fondoj2blue').addEventListener('click', function (){
    fondofichaj2 = "images/blueCoin.png";
    document.querySelector('.fondoj2blue').className = 'fichaElegida';
    document.querySelector('.fondoj1blue').className='hidden';
})
document.querySelector('.fondoj2green').addEventListener('click', function (){
    fondofichaj2 = "images/greenCoin.png";
    document.querySelector('.fondoj2green').className = 'fichaElegida';
    document.querySelector('.fondoj1green').className='hidden';
})
document.querySelector('.fondoj2brown').addEventListener('click', function (){
    fondofichaj2 = "images/brownCoin.png";
    document.querySelector('.fondoj2brown').className = 'fichaElegida';
    document.querySelector('.fondoj1brown').className='hidden';
})
document.querySelector('.fondoj2grey').addEventListener('click', function (){
    fondofichaj2 = "images/greyCoin.png";
    document.querySelector('.fondoj2grey').className = 'fichaElegida';
    document.querySelector('.fondoj1grey').className='hidden';
})


document.querySelector('#btn_load_game').addEventListener('click', ()=>{
    if (fondofichaj1 != '' && fondofichaj2 != '') {
        document.querySelector(".show").className = "hidden";
        document.querySelector(".hidden2").className = "show";
        document.querySelector("#myProgress").className="show2";
        
        let canvas = document.querySelector('#myCanvas');
        ctx = canvas.getContext('2d');
        let cantidadLineas = document.querySelector("#cantLineas").value;
        let columnas = 0;
        let filas = 0;
        console.log(cantidadLineas);
        if (cantidadLineas == 4) {
            columnas = 7;
            filas = 6;
            canvas.width = 1400;
            canvas.height = 700;
        } else if (cantidadLineas == 5) {
            columnas = 8;
            filas = 7;
            canvas.width = 1400;
            canvas.height = 800;
        } else if (cantidadLineas == 6) {
            columnas = 9;
            filas = 8;
            canvas.width = 1400;
            canvas.height = 900;
        }
        let juego = new Juego(canvas, cantidadLineas, columnas, filas, fondofichaj1, fondofichaj2);
        juego.tablero.limpiarCanvas();
        let time = true;
        tiempo();
        juego.nuevoJuego();//fondoj1,fondoj2

    function onMouseDown(e){
        if (time){
            juego.onMouseDown(e)
        }
    }

    function onMouseMove(e){
        if (time){
            juego.onMouseMove(e)
        }
    }
    function onMouseUp(e){
        if (time){
            juego.onMouseUp(e)
        }
    }
    function onMouseLeave(e){
        juego.isMouseDown = false;
        if((juego.ultimaFichaClickeada != null && juego.ganador == 0) || time){
            juego.ultimaFichaClickeada.setSeleccionada(false);
            juego.ultimaFichaClickeada.setPosicionCanvas2(juego.ultimaFichaClickeada.getPosicionInicial().x,juego.ultimaFichaClickeada.getPosicionInicial().y);
            juego.tablero.dibujarTablero();
        }
    }

    function tiempo(){
        let elem = document.getElementById("countdown");
        let width = 0;
        let id = setInterval(frame, 1000);
        function frame() {
            if (width == 100 || juego.ganador != 0) {
                clearInterval(id);
                time = false;
                let mensaje = "Finalizo el Tiempo de Juego";
                juego.tablero.dibujarTableroFinal(juego.ganador, mensaje);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }

    canvas.addEventListener('mousedown',onMouseDown);
    canvas.addEventListener('mouseup',onMouseUp);
    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave)
    }else{
        alert('Seleccione las fichas de ambos jugadores');
    }
})

});




