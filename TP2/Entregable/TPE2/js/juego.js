class Juego{
    constructor(){
        this.jugador1 ;
        this.jugador2 ;
        this.tablero;
        this.turno;
        this.ganador;
    }

    nuevoJuego(){

    }

    setJugadores(){
        this.jugador1=new Jugador();
        this.jugador2=new Jugador();
    }

    setTablero(){
        this.tablero = new Tablero();
    }

    getTurno(){
        return this.turno;
    }    

    setTurno(){

    }

    cambiarTurno(){

    }

    getGanador(){
        return this.ganador;
    }
    

}