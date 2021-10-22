class Personaje{
    constructor() {
       this.posicion=0;
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