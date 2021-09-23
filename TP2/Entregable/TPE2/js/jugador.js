class Jugador {
    constructor(num){
        this.turnoJugador=num;
        this.fichas =[];
    }

    getTurno(){
        return this.turnoJugador;
    }

    setTurno(num){
        this.turno =num; 
    }

    getFichas(){
        return this.fichas;
    }

    seleccioneFicha(x,y){
        for (let i = 0; i < this.fichas.length; i++) {
            const element = this.fichas[i];
            if(element.estoyAdentro(x,y)){
                return element;
            }
        }
    }
    
}
