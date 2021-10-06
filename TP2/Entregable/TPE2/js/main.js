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

    
    canvas.addEventListener('mousedown',onMouseDown,false);
    canvas.addEventListener('mouseup',onMouseUp,false);
    canvas.addEventListener('mousemove',onMouseMove,false);
})

});




