class Juego{
    constructor(){
        this.jugador1;
        this.jugador2;
        this.tablero;
        this.turno;
        this.ganador;
    }

    nuevoJuego(){

    }

    cargarFichas(){
        this.tablero = new Tablero();
        this.jugador1 = new Jugador();
        this.jugador2 = new Jugador();
        let cantFichas= this.tablero.columnas * this.tablero.filas;
        let posX = 40;
        let posY = 50;
        let posY1 = 50;
        let colorj1 ='red';
        let colorj2 ='black';
        let fichasCreadas=0;
        
        
        while ( fichasCreadas < cantFichas) {
            if(fichasCreadas<(cantFichas/2)){
                let fichaJ1 = new Ficha(colorj1);
                this.jugador1.fichas.push(fichaJ1);
                fichaJ1.dibujarFicha(posX, posY);
                fichasCreadas+=1;
                posX += 100;
                if(fichasCreadas % 3 == 0){
                    posX=40;
                    posY+=100;
                }
            }else{
                
                let fichaJ2 = new Ficha(colorj2);
                this.jugador2.fichas.push(fichaJ2);
                fichaJ2.dibujarFicha(posX + 1100, posY1);
                fichasCreadas+=1;
                posX += 100;
                if(fichasCreadas % 3 == 0){
                    posX=40;
                    posY1+=100;
                }
            }
        }
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