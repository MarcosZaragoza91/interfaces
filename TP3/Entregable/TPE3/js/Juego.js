class Juego{
    constructor(posicionPer,posicionObsMurg,posicionSerp) {
        this.personaje = new Personaje(posicionPer);
        this.obstaculoMurg = new Obstaculo(posicionObsMurg);
        this.obstaculoSerp = new Obstaculo(posicionSerp);  
        this.nuevaDireccion= '';

        //Pato
        this.obstaculo = new Obstaculo();
    }
    
    personajeMuerto(){
        
    }   

    avanzar(obstaculoS,obstaculoM){
        obstaculoS.className='obstaculoConMovimientoS';
        obstaculoM.className='obstaculoConMovMurg';
        setInterval(function(){
            setTimeout(() => {
                    obstaculoS.className='obstaculoConMovimientoS';
                    obstaculoM.className='obstaculoConMovMurg';
                }, 1000); 
                obstaculoS.className= 'obstaculoSerp';
                obstaculoM.className= 'obstaculoMurg';
            }, 10000);
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

    //Pato

    startGameLoop2 (nuevaDireccion){
        if(nuevaDireccion){
            if(nuevaDireccion == 'up'){
                this.personaje.saltar();
            }else if(nuevaDireccion == 'down'){
                this.personaje.agacharse();
            }
        }
    };

    avanzar2(obstaculoS){
        this.obstaculo = obstaculoS;
        this.obstaculo.className = 'obstaculoConMovimientoS';
        // obstaculoS.className='obstaculoConMovimientoS';
        // obstaculoM.className='obstaculoConMovMurg';
        setInterval(function(){
            setTimeout(() => {
                this.obstaculo.crearObstaculo(obstaculoS);
                console.log(this.obstaculo);
                this.obstaculo.className = 'obstaculoConMovimientoS';
                // obstaculoS.className='obstaculoConMovimientoS';
                // obstaculoM.className='obstaculoConMovMurg';
            }, 1000);
            //this.obstaculo.className = 'obstaculoSerp';
            // obstaculoS.className= 'obstaculoSerp';
            // obstaculoM.className= 'obstaculoMurg';
        }, 10000);
    }

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