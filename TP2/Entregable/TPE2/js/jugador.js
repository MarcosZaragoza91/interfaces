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


    
}
