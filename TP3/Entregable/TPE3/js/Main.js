
document.addEventListener("DOMContentLoaded",function(){

    let avatar = 0;
    
    document.querySelector('.avatar1').addEventListener('click', function (){
        stylePerson = document.querySelector('#personaje').className = 'personajeCorriendo1';
        avatar = 1;
    })

    document.querySelector('.avatar2').addEventListener('click', function (){
        
        
        let stylePerson = document.querySelector('#personaje').className = 'personajeCorriendo2';
        avatar = 2;
    })

    document.querySelector('#btn_start_game').addEventListener('click', ()=>{ //INICIO DEL JUEGO
        let btnComienzo = document.querySelector('#btn_start_game');
        btnComienzo.className= 'hidden';
     
        let containerAvatars= document.querySelector('#container-Avatars');
        containerAvatars.className = 'hidden';  
    

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
                if (juego.timer == 0 || juego.personaje.getMuerto()){
                    let mensajeTiempo = 'SE TERMINO EL TIEMPO...SU PUNTAJE ES ';
                    juego.modalMuerte(juego.puntaje , mensajeTiempo);    
                    clearInterval(tiempoJuego);
                }
            }, 1000)
            
            let obstaculos = setInterval(function() {
                juego.obstaculoRandom();
                if (juego.timer == 5 || juego.personaje.getMuerto()){
                    clearInterval(obstaculos)
                    
                }
            },juego.obstaculoRandomTimer());
            

            let moverObstaculos = setInterval(function() {
                juego.moverObstaculos();
                juego.deleteObstaculo();
                if (juego.timer == 0 || juego.personaje.getMuerto()){
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
    
});