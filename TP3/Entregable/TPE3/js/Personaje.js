class Personaje{
    constructor(posicion) {
       this.posicion=posicion; 
    }

    posCentro(){
        let x = this.posicion.left + (this.posicion.width/2);
        let y = this.posicion.top + (this.posicion.height /2);
    }
    getPosicion(){
        return this.posicion;
    }    
    saltar(){
        let stylePerson = document.querySelector('#personaje');
        stylePerson.className = "personajeSaltando";
    }
    
    correr(){
        let stylePerson = document.querySelector('#personaje');
            stylePerson.className="personajeCorriendo";
    }

    agacharse(){
        let stylePerson = document.querySelector('#personaje');
            stylePerson.className="personajeAgachado";
    }

}