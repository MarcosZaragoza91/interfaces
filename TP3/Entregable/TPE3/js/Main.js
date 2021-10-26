
document.addEventListener("DOMContentLoaded",function(){

    let stylePerson = '';
    let avatar = 0;
    
    document.querySelector('.avatar1').addEventListener('click', function (){
        stylePerson = document.querySelector('.personaje');
        stylePerson.classname = 'personaje1';
        avatar = 1;
    })

    document.querySelector('.avatar2').addEventListener('click', function (){
        let stylePerson = document.querySelector('.personaje');
        stylePerson.classname = 'personaje2';
        avatar = 2;
    })

    document.querySelector('#btn_start_game').addEventListener('click', ()=>{ //INICIO DEL JUEGO

        document.querySelector('.close').addEventListener('click', function (){
            document.querySelector('.modal').classList.remove("modal-visible");
            document.querySelector('.modal').classList.add("modal-oculto");
        });

        if(avatar!=0){

            let juego = new Juego(avatar);
            let stylePerson = document.querySelector('#personaje');
            stylePerson.className = "personajeCorriendo"+String(juego.personaje.avatar);;

            
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
                if (juego.timer == 5 || juego.personaje.getMuerto()){
                    clearInterval(obstaculos)
                }
            },4000);
            

            let moverObstaculos = setInterval(function() {
                juego.moverObstaculos();
                if (juego.deleteObstaculo() && juego.personaje.getMuerto()){
                    clearInterval(moverObstaculos);
                }
                },20);    
        }else{
            let modal = document.querySelector(".modal");
            document.querySelector('#modal-txt').innerHTML = "DEBE ELEGIR UN PERSONAJE PARA INICIAR EL JUEGO";
            modal.classList.remove("modal-oculto");
            modal.classList.add("modal-visible");
        }    

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