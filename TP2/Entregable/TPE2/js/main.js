window.addEventListener('load', function (){

    // let fondoj1 = document.querySelector(#fichaj1).addEventListener('click', function (){
    //     return this.value;
    // });
    // let fondoj2 = document.querySelector(#fichaj2).addEventListener('click', function (){
    //     return this.value;
    // })

document.querySelector('#btn_load_game').addEventListener('click', ()=>{
    let canvas = document.querySelector('#myCanvas');
    //let ctx = canvas.getContext('2d');

    let juego = new Juego(canvas);
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
        if(juego.ultimaFichaClickeada != null){
            juego.ultimaFichaClickeada.setSeleccionada(false);
            juego.onMouseDown(e);
        }
    }

    
    canvas.addEventListener('mousedown',onMouseDown);
    canvas.addEventListener('mouseup',onMouseUp);
    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave)
})

});




