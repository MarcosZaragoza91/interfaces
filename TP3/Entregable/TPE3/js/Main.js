
document.addEventListener("DOMContentLoaded",function(){    

   

    document.querySelector('#btn_start_game').addEventListener('click', ()=>{ //INICIO DEL JUEGO
        let personaje = document.querySelector('.personaje');
        let posicionPersonaje = personaje.getBoundingClientRect();

        let obstaculo = document.querySelector('#obstaculo');
        let posObstaculo = obstaculo.getBoundingClientRect();
       


        let juego = new Juego(posicionPersonaje);
        
        let stylePerson = document.querySelector('#personaje');
        stylePerson.className = "personajeCorriendo";
        
        function keyPress(e){
            juego.keyInput(e);   
        }    

        function keyUp(e){
            juego.keyUp(e);
        }
        window.addEventListener('keydown', keyPress);
        window.addEventListener('keyup', keyUp);

    });
    
    
    
    /*
    window.start_game = startGameLoop() {
        if(!timer) {
          timer = setInterval(update, frameDuration);
        }
    }
    
      window.pause_game = function pauseGameLoop() {
        clearInterval(timer);
        timer = null;
    }
    
    */


});