class Personaje{
    constructor(avatar) {
       this.posicionY=100;
       this.div = document.querySelector("#personaje");
       this._posicionX= this.div.offsetWidth + this.div.getAttribute("width")/2;
       this._muerto = false;
       this.avatar=avatar;
    }

    //Funcion para saber si el personaje esta muerto
    getMuerto() {
        return this._muerto;
    }

    //Funcion para setear la muerte del personaje
    setMuerto(value) {
        this._muerto = value;
    }

    //Funcion para obtener la posicion de X, la cual usaremos para validar si hayColision con los obstaculos
    getPosicionX(){
        return this._posicionX;
    }

    //Funcion que realiza la animacion de salto
    saltar(){
        let stylePerson = document.querySelector('#personaje');
        stylePerson.className = "personajeSaltando"+String(this.avatar);
        this.posicionY = 110;
    }

    //Funcion que realiza la animacion de corrida
    correr(){
        let stylePerson = document.querySelector('#personaje');
        stylePerson.className="personajeCorriendo"+String(this.avatar);
        this.posicionY=100;
    }

    //Funcion que realiza la animacion de agacharse
    agacharse(){
        let stylePerson = document.querySelector('#personaje');
        stylePerson.className="personajeAgachado"+String(this.avatar);
        this.posicionY = 90;
    }

    //Funcion que realiza la animacion de la muerte, con un setTimeout para que el personaje quede en el suelo
    morir(){
        let stylePerson = document.querySelector('#personaje');
        stylePerson.className="personajeMuerto"+String(this.avatar);
        let aux = this.avatar;
        setTimeout(function (){
            stylePerson.className = "personajeMorirFinal"+aux;
        },500);
    }

}