
document.addEventListener("DOMContentLoaded",function(){    
    
    document.querySelector('#btn_start_game').addEventListener('click', ()=>{ //INICIO DEL JUEGO
        
        let juego = new Juego();
        

        function keyPress(e){
            juego.keyInput(e);   
        }    

        window.addEventListener('keydown', keyPress);
    });
    
    
    
    /*
    window.start_game = startGameLoop() {
        if(!timer) {
          timer = setInterval(update, frameDuration);
        }
    }
    
      window.pause_game = function pauseGaneLoop() {
        clearInterval(timer);
        timer = null;
    }
    
    */


});