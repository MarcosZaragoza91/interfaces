
document.addEventListener("DOMContentLoaded",function(){    

   

    document.querySelector('#btn_start_game').addEventListener('click', ()=>{ //INICIO DEL JUEGO
        let stylePerson = document.querySelector('#personaje');
        stylePerson.className = "personajeCorriendo";

        let juego = new Juego();

        let interval = setInterval(function (){
            function keyPress(e){
                juego.keyPress(e);
            }

            function keyUp(e){
                juego.keyUp(e);
            }
            window.addEventListener('keydown', keyPress);
            window.addEventListener('keyup', keyUp);
        },500);

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