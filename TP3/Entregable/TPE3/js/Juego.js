class Juego{
    constructor() {
        this.personaje = new Personaje();
        this.nuevaDireccion= '';
        //Pato
        this.obstaculo = new Obstaculo();
    }
    
    personajeMuerto(){
        
    }   

    keyLoop (nuevaDireccion){
        this.crearObstaculo(2)
        this.obstaculo.moverIzquierda();//este iria en el loop del juego
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

    keyPress(e) {
        let teclaApretada = e.which || e.keyCode;
        let keyMap = {
            '38': 'up',    // up arrow
            '40': 'down',  // down arrow
            '87': 'up',    // w
            '83': 'down',  // s
        }
        this.nuevaDireccion = keyMap[teclaApretada];
        this.keyLoop(this.nuevaDireccion);
    };

    elegirClase(numero){//hacer que se cree un obstaculo u otro cada tanto tiempo
        let clase ='';
        if(numero > 1 && numero < 3){
            clase= 'obstaculoMurg';
        }else if (numero > 3 && numero < 6 ){
            clase = 'obstaculoSerp';
        }else{
            clase = 'premio';
        }
        return clase;
    }

    crearObstaculo(numero){
        let clase = this.elegirClase(numero);
        this.obstaculo.setClass(clase)
    }

    obstaculoRandom(){
        let numero = Math.round(Math.floor(Math.random() * 9));
        setTimeout(this.crearObstaculo(numero), 5000);
    }


    //Pato
    obstaculoRandom(){
        let randomObs = Math.floor(Math.random() * 2);
        let randomTime = Math.floor(Math.random() * 3)
        let obj = {
            'objeto':randomObs,
            'tiempo':randomTime
        }
        return obj;
    }
}