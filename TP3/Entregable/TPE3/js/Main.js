
document.addEventListener("DOMContentLoaded",function(){    

   

    document.querySelector('#btn_start_game').addEventListener('click', ()=>{ //INICIO DEL JUEGO
        let stylePerson = document.querySelector('#personaje');
        stylePerson.className = "personajeCorriendo";

        let juego = new Juego();
                    
            function keyPress(e){
                juego.keyPress(e);
            }
            
            function keyUp(e){
                juego.keyUp(e);
            }
            window.addEventListener('keydown', keyPress);
            window.addEventListener('keyup', keyUp);

            let tiempoJuego=setInterval(function (){
                juego.timer--;
                document.querySelector(".timer2").innerHTML = juego.timer;
                if (juego.timer == 0){
                    clearInterval(tiempoJuego);
                }
            }, 1000)

            let obstaculos = setInterval(function() {
                    juego.obstaculoRandom();
                    if (juego.timer == 5){
                        clearInterval(obstaculos)
                    }
            },4000);

            let moverObstaculos = setInterval(function() {
                juego.moverObstaculos();
                if (juego.deleteObstaculo() && juego.personaje.getMuerto()){
                    clearInterval(moverObstaculos);
                }
            },20);
             
             
    
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