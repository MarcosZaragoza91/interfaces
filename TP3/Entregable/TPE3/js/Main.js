
document.addEventListener("DOMContentLoaded",function(){

    let avatar = 0;
    
    //cuando se selecciono un avatar le paso la clase al div que contiene personaje.
    document.querySelector('.avatar1').addEventListener('click', function (){
        stylePerson = document.querySelector('#personaje').className = 'personajeCorriendo1';
        avatar = 1;
    })

    document.querySelector('.avatar2').addEventListener('click', function (){
        
        
        let stylePerson = document.querySelector('#personaje').className = 'personajeCorriendo2';
        avatar = 2;
    })

    //inicio del juego
    document.querySelector('#btn_start_game').addEventListener('click', ()=>{ 
        let btnComienzo = document.querySelector('#btn_start_game');
        btnComienzo.className= 'hidden';
        
        //oculto el contedor de los avatars cuando comienza el juego
        let containerAvatars= document.querySelector('#container-Avatars');
        containerAvatars.className = 'hidden';  
    
        //sino seleccione ningun avatar no empieza el juego
        if(avatar!=0){
            let juego = new Juego(avatar);
            let stylePerson = document.querySelector('#personaje');
            stylePerson.className = "personajeCorriendo"+String(juego.personaje.avatar);;
            
            function keyPress(e){
                juego.keyPress(e);
            }

            window.addEventListener('keydown', keyPress);


            //set interval que controla el timer, va restando de a un segundo si se termino el tiempo o el personaje se murio
            //se detiene el tiempo de juego
            let tiempoJuego=setInterval(function (){
                juego.timer--;
                document.querySelector(".timer2").innerHTML = juego.timer;
                if (juego.timer == 0 || juego.personaje.getMuerto()){
                    let mensajeTiempo = 'SE TERMINO EL TIEMPO...SU PUNTAJE ES ';
                    juego.modalMuerte(juego.puntaje , mensajeTiempo);    
                    clearInterval(tiempoJuego);
                }
            }, 1000)
            
            //set interval que controla que los obstaculos se creen de manera random si el tiempo es igual a 5 segundos o el personaje esta muerto
            //dejo de crear obstaculos
            let obstaculos = setInterval(function() {
                juego.obstaculoRandom();
                if (juego.timer == 5 || juego.personaje.getMuerto()){
                    clearInterval(obstaculos)
                    
                }
            },juego.obstaculoRandomTimer());
            
            //set interval que controla el movimiento de los obstaculos de der a izquierda y los va borrando 
            //a medida que quedan afuera del viewport, si el tiempo es 0 o el personaje murio se detiene el movimiento de obstaculos
            let moverObstaculos = setInterval(function() {
                juego.moverObstaculos();
                juego.deleteObstaculo();
                if (juego.timer == 0 || juego.personaje.getMuerto()){
                    clearInterval(moverObstaculos);
                }
                },20);    
        }else{
            //si no eleigio un avatar aparece un modal con una alerta
            let modal = document.querySelector(".modal");
            document.querySelector('#modal-txt').innerHTML = "DEBE ELEGIR UN PERSONAJE PARA INICIAR EL JUEGO";
            modal.classList.remove("modal-oculto");
            modal.classList.add("modal-visible");
        }    

    });
    
});