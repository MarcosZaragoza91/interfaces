window.addEventListener('load', function (){

    // let fondoj1 = document.querySelector(#fichaj1).addEventListener('click', function (){
    //     return this.value;
    // });
    // let fondoj2 = document.querySelector(#fichaj2).addEventListener('click', function (){
    //     return this.value;
    // })

document.querySelector('#btn_load_game').addEventListener('click', ()=>{
    let canvas = document.querySelector('#myCanvas');
     ctx = canvas.getContext('2d');
    let cantidadLineas = document.querySelector("#cantLineas").value;
    let columnas=0;
    let filas =0;
    console.log(cantidadLineas);	
    if(cantidadLineas==4){
        columnas=7;
        filas=6;
        canvas.width = 1400;
        canvas.height = 900;
    }else if(cantidadLineas==5) {
        columnas=8;
        filas=7;
        canvas.width = 1500;
        canvas.height = 1000;
    }else if(cantidadLineas==6){
        columnas=9;
        filas=8;
        canvas.width = 1600;
        canvas.height = 1100;
    }
    console.log("columnas " + columnas + " filas " + filas);
    let juego = new Juego(canvas,cantidadLineas,columnas,filas);
    juego.tablero.limpiarCanvas();
    juego.nuevoJuego();//fondoj1,fondoj2

    function onMouseDown(e){
        juego.onMouseDown(e)
    }
     
    function onMouseMove(e){
        juego.onMouseMove(e)
    }
    function onMouseUp(e){
        juego.onMouseUp(e)
    }
    function onMouseLeave(e){
        juego.isMouseDown = false;
        if(juego.ultimaFichaClickeada != null && juego.ganador == 0){
            juego.ultimaFichaClickeada.setSeleccionada(false);
            juego.ultimaFichaClickeada.setPosicionCanvas2(juego.ultimaFichaClickeada.getPosicionInicial().x,juego.ultimaFichaClickeada.getPosicionInicial().y);
            juego.tablero.dibujarTablero();
        }
    }

    
    canvas.addEventListener('mousedown',onMouseDown);
    canvas.addEventListener('mouseup',onMouseUp);
    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave)
})

});




