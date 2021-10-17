class Personaje{
    constructor() {
       
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