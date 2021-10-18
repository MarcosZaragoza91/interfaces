
document.addEventListener("DOMContentLoaded",function(){    
    

    document.querySelector('#btn_start_game').addEventListener('click', ()=>{ //INICIO DEL JUEGO
        let personaje = document.querySelector('.personaje');
        let posicionPersonaje = personaje.getBoundingClientRect();
        console.log(posicionPersonaje);

        let obstaculoSerp = document.querySelector('.obstaculoSerp');
        let posObstaculoSerp = obstaculoSerp.getBoundingClientRect();

        let obstaculoMurg = document.querySelector('.obstaculoMurg');
        let posObstaculoMurg = obstaculoMurg.getBoundingClientRect();

        let juego = new Juego(posicionPersonaje,posObstaculoMurg , posObstaculoSerp);
        let stylePerson = document.querySelector('#personaje');
        stylePerson.className = "personajeCorriendo";
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
    
      window.pause_game = function pauseGameLoop() {
        clearInterval(timer);
        timer = null;
    }
    
    */


});