class Juego{
    constructor(posicionPer,posicionObsMurg,posicionSerp) {
      this.personaje = new Personaje(posicionPer);
      this.obstaculoMurg = new Obstaculo(posicionObsMurg);
      this.obstaculoSerp = new Obstaculo(posicionSerp);  
    }
    
    personajeMuerto(){
        
    }

    startGameLoop (nuevaDireccion){
        if(nuevaDireccion){
            if(nuevaDireccion == 'up'){
                this.personaje.saltar();
               // setTimeout(this.personaje.correr,1000);
            }else if(nuevaDireccion == 'down'){
                this.personaje.agacharse();
                //setTimeout(this.personaje.correr,500);
            }
            setTimeout(this.personaje.correr,1000);
        }  
    };

    keyInput(e) {
        let teclaApretada = e.which || e.keyCode;
        let keyMap = {
            '38': 'up',    // up arrow
            '40': 'down',  // down arrow
            '87': 'up',    // w
            '83': 'down',  // s
        }
        let nuevaDireccion = keyMap[teclaApretada];
        this.startGameLoop(nuevaDireccion);
    };
    


}