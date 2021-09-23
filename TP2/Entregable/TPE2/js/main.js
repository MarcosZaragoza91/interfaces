//window.addEventListener('DOMContentLoad', function (){

document.querySelector('#btn_fichas').addEventListener('click', ()=>{
    let canvas = document.querySelector('#myCanvas');
    let ctx = canvas.getContext('2d');
    let juego = new Juego();
    juego.nuevoJuego();
   
    
    function onMouseDown(e){
        juego.onMouseDown(e)
    }
     
    function onMouseMove(e){
        juego.onMouseMove(e)
    }
    function onMouseUp(e){
        juego.onMouseUp(e)
    }

    
    canvas.addEventListener('mousedown',onMouseDown,false);
    canvas.addEventListener('mouseup',onMouseUp,false);
    canvas.addEventListener('mousemove',onMouseMove,false);

})

//});




