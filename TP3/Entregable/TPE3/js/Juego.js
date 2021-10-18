class Juego{
    constructor(posicionPer,posicionObsMurg,posicionSerp) {
        this.personaje = new Personaje(posicionPer);
        this.obstaculoMurg = new Obstaculo(posicionObsMurg);
        this.obstaculoSerp = new Obstaculo(posicionSerp);  
        this.nuevaDireccion= '';
    }
    
    personajeMuerto(){
        
    }   


    
    startGameLoop (nuevaDireccion){
        if(nuevaDireccion){
            if(nuevaDireccion == 'up'){
                this.personaje.saltar();
            }else if(nuevaDireccion == 'down'){
                this.personaje.agacharse();
            }
        }  
    };

    keyUp(e){
        if(this.nuevaDireccion == 'up'){
            this.nuevaDireccion='';
            setTimeout(this.personaje.correr,1000);
        }else if(this.nuevaDireccion == 'down'){
            this.nuevaDireccion='';
            setTimeout(this.personaje.correr,500);
        }
    }


    keyInput(e) {
        let teclaApretada = e.which || e.keyCode;
        let keyMap = {
            '38': 'up',    // up arrow
            '40': 'down',  // down arrow
            '87': 'up',    // w
            '83': 'down',  // s
        }
        this.nuevaDireccion = keyMap[teclaApretada];
        this.startGameLoop(this.nuevaDireccion);
    };
    


}