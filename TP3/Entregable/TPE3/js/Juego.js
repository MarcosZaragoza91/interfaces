class Juego{
    constructor(avatar) {
        this.personaje = new Personaje(avatar);
        this.nuevaDireccion= 'run';
        this.arrObstaculos=[];        
        this.seccion = document.querySelector('#container');
        this.timer = 100;
        this.puntaje = 0;
    }

    deleteObstaculo (){
        for (let i = 0; i < this.arrObstaculos.length; i++) {
            if (this.arrObstaculos[i].getPosicion() < -270){
                this.seccion.removeChild(this.arrObstaculos[i].div);
                this.arrObstaculos.splice(i,1);
                return true;
            }
        }
    }

    keyLoop(nuevaDireccion){
        if(nuevaDireccion){
            if(nuevaDireccion == 'up'){
                this.personaje.saltar();
            }else if(nuevaDireccion == 'down'){
                this.personaje.agacharse();
            }
        }
    };
    
    keyPress(e) {
        if(!this.personaje.getMuerto()){
            if (this.nuevaDireccion == 'run'){
                let teclaApretada = e.keyCode;
                let keyMap = { //Keymap fiera de la funcion
                    '87': 'up',    // w
                    '83': 'down',  // s
                }
                this.nuevaDireccion = keyMap[teclaApretada];
                this.keyLoop(this.nuevaDireccion);
                let game = this;
                setTimeout(()=>{
                    if (game.personaje.getMuerto()){
                        game.personaje.morir();
                    }else{
                        game.personaje.correr();
                        game.nuevaDireccion = 'run';
                    }
                }, 1000);
            }
        }
    };

    elegirClase(numero){//hacer que se cree un obstaculo u otro cada tanto tiempo
        let clase ='';
        if(numero >= 1 && numero < 4){
            clase= 'obstaculoMurg';
        }else if (numero >= 4 && numero < 7 ){
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
                    if (element.getPosicion() < this.personaje.getPosicionX()+5 && element.getPosicion() > this.personaje.getPosicionX()-5){
                        if (this.hayColision(element)){
                            if (element.getEsPremio()){
                                this.puntaje += 10;
                                document.querySelector('.puntos').innerHTML = this.puntaje;
                                console.log(this.arrObstaculos);
                                this.seccion.removeChild(this.arrObstaculos[i].div);
                                this.arrObstaculos.splice(i,1);
                                document.querySelector('.premio2').className = 'destello';
                                setTimeout(function () {
                                    document.querySelector('.destello').className = 'premio2';
                                },800);
                            }else{
                                this.personaje.morir();
                                this.personaje.setMuerto(true);
                                let mensajeMuerte = 'AH MUERTO...SU PUNTAJE ES ';
                                setTimeout(this.modalMuerte,500,this.puntaje,mensajeMuerte);
                                break;
                            }
                        }
                    }
                }
            }
    }

    modalMuerte(puntaje,mensajeMuerte){
        let modal = document.querySelector(".modal");
        document.querySelector('#modal-txt').innerHTML = mensajeMuerte + puntaje;
        modal.classList.remove("modal-oculto");
        modal.classList.add("modal-visible");
    }

    hayColision(obstaculo){
        console.log("----hayColision------")
        console.log(this.personaje.posicionY);
        if (obstaculo.getClass() === "obstaculoSerp" && this.personaje.posicionY > 100 ||
            obstaculo.getClass() === "obstaculoMurg" && this.personaje.posicionY < 100 ||
            obstaculo.getClass() === "premio" && this.personaje.posicionY <= 100){
            return false;
        }else
            return true;
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

    obstaculoRandomTimer(){
        let numero = Math.round(Math.floor(Math.random() * 3)+1);
        return numero*1000;
    }

}