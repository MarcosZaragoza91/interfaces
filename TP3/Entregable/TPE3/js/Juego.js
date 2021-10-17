class Juego{
    constructor() {
      this.personaje = new Personaje();
    }
    
    startGameLoop (nuevaDireccion){
        if(nuevaDireccion){
            if(nuevaDireccion == 'up'){
                this.personaje.saltar();
                setTimeout(this.personaje.correr,1000);
            }else if(nuevaDireccion == 'down'){
                this.personaje.agacharse();
                setTimeout(this.personaje.correr,500);
            }
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