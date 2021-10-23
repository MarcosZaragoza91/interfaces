class Juego{
    constructor() {
        this.personaje = new Personaje();
        this.nuevaDireccion= '';
        this.arrObstaculos=[];        
        this.seccion = document.querySelector('#container');
    }

    getObstaculo (){
        return this.obstaculo;
    }
    colicion(Obstaculo){
        
    }   

    keyLoop (nuevaDireccion){
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

    moverObstaculos() {   
            if(this.arrObstaculos.length != 0){
                for (let i = 0; i < this.arrObstaculos.length; i++) {
                    const element = this.arrObstaculos[i];
                    element.moverIzquierda();
                }
            }            
    }

    crearObstaculo(numero){
        let clase = this.elegirClase(numero);
        let obstaculo= null;
        if(clase == 'premio'){
            obstaculo = new Obstaculo(clase);
            obstaculo.setEsPremio(true);
        }else{
            obstaculo = new Obstaculo(clase);
        }
        this.arrObstaculos.push(obstaculo);  
    }

    obstaculoRandom(){

            let numero = Math.round(Math.floor(Math.random() * 9));
            this.crearObstaculo(numero);
    }

}