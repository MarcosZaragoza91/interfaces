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
    
    keyUp(e){
        if(this.nuevaDireccion == 'up'){
            //this.nuevaDireccion='run';
            // this.personaje.setPosicionY(110)
            // console.log(this.personaje.posicionY)
            //setTimeout(this.personaje.correr,1000);
            // //this.personaje.setPosicionY(100);
            // console.log("espera");
            // console.log(this.personaje.posicionY);
        }else if(this.nuevaDireccion == 'down'){
            //this.nuevaDireccion='run';
            // this.personaje.setPosicionY(90);
            // console.log(this.personaje.posicionY);
            //setTimeout(this.personaje.correr,1000);
            // this.personaje.setPosicionY(100);
            // console.log(this.personaje.posicionY);
        }
    }

    keyPress(e) {
            if (this.nuevaDireccion == 'run'){
                let teclaApretada = e.which || e.keyCode;
                let keyMap = { //Keymap fiera de la funcion
                    '38': 'up',    // up arrow
                    '40': 'down',  // down arrow
                    '87': 'up',    // w
                    '83': 'down',  // s
                }
                this.nuevaDireccion = keyMap[teclaApretada];
                this.keyLoop(this.nuevaDireccion);
                let game = this;
                setTimeout(()=>{
                    game.personaje.correr();
                    game.nuevaDireccion = 'run';
                }, 1000);
        }
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
                                setTimeout(this.modalMuerte,500,this.puntaje);
                                break;
                            }
                        }
                    }
                }
            }
    }

    modalMuerte(puntaje){
        let modal = document.querySelector(".modal");
        document.querySelector('#modal-txt').innerHTML = "AH MUERTO...SU PUNTAJE ES " + puntaje;
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
        let numero = Math.round(Math.floor(Math.random() * 3)+2);
        return numero*1000;
    }

}