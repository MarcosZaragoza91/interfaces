class Personaje{
    constructor(avatar) {
       this.posicionY=0;
       this.div = document.querySelector("#personaje");
       this._posicionX= this.div.offsetWidth + this.div.getAttribute("width")/2;
       this._muerto = false;
       this.avatar=avatar;
    }


    getMuerto() {
        return this._muerto;
    }

    setMuerto(value) {
        this._muerto = value;
    }

    getPosicionX(){
        return this._posicionX;
    }

    getPosicionY(){
        return this.posicionY;
    }

    setPosicionY(value){
        this.posicionY=value;
    }

    saltar(){
        let stylePerson = document.querySelector('#personaje');
        stylePerson.className = "personajeSaltando"+String(this.avatar);
        this.posicionY = 110;
    }
    
    correr(){
        let stylePerson = document.querySelector('#personaje');
        stylePerson.className="personajeCorriendo"+String(this.avatar);
        this.posicionY=100;
    }

    agacharse(){
        let stylePerson = document.querySelector('#personaje');
        stylePerson.className="personajeAgachado"+String(this.avatar);
        this.posicionY = 90;
    }

    morir(){
        let stylePerson = document.querySelector('#personaje');
        stylePerson.className="personajeMuerto"+String(this.avatar);;
    }

}