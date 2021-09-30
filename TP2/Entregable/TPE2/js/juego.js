class Juego{
    constructor(canvas){
        this.canvas = document.querySelector('#myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.jugador1=new Jugador(1);
        this.jugador2=new Jugador(2);
        this.tablero= new Tablero(canvas);
        this.turno;//esto tiene jugador
        this.ganador;
        this.isMouseDown=false;
        this.ultimaFichaClickeada = null;
    }

    nuevoJuego(){
        this.tablero.crearTablero();
        //this.setJugadores();
        this.tablero.cargarFichasJugadorPorJugador();
    }


    onMouseDown(e){
        this.isMouseDown= true;
        if(this.isMouseDown== true && this.ultimaFichaClickeada != null){ //si tengo clickeada una ficha y voy a clickear otra
            this.ultimaFichaClickeada.setSeleccionada(false);        // le saco el resaltado a la anterior y dejod e guardarla
            this.ultimaFichaClickeada =null;
        }
        let fichaClickeada = this.tablero.seleccioneFicha(e.layerX , e.layerY); //se fija si tiene seleccionada una ficha
        console.log(fichaClickeada);
        if(fichaClickeada != null){ //si la tiene
           fichaClickeada.setSeleccionada(true);//setea la ficha en true
           this.ultimaFichaClickeada = fichaClickeada; // y guarda la ultima clickeada
        }
         console.log(this.ultimaFichaClickeada);
         this.tablero.dibujarTablero(); //borra y dibuja el canvas
    }
         
        
    onMouseMove(e){
        if(this.isMouseDown==true && this.ultimaFichaClickeada !=null){//si el mouse esta abajo y hay una ficha clickeada
            this.ultimaFichaClickeada.setPosicionCanvas(e.layerX,e.layerY); //le pasa la posicion
            this.tablero.dibujarTablero(); //borra y dibuja
        }
    }

    onMouseUp(e){
        this.isMouseDown=false;
        let arrCasillero = this.tablero.getMatriz();
        console.log(arrCasillero[1][1]);
        let rangoLimite = 30;
        let x= Math.floor(e.layerX/100)+1;
        let y= Math.floor(e.layerY/100);
        if (y == 0 && this.ultimaFichaClickeada != null){
            for (let i = (arrCasillero[x].length-1) ; i > 0; i--) {
                let casillero = arrCasillero[x][i];
                if (casillero.getFicha()== null){
                    let arrFicha = this.tablero.getArrFichas();
                    if(arrFicha[0] != null){
                        arrCasillero[x][i].setFicha(arrFicha[0]);
                        //Buscamos la ficha dentro del arreglo y la eliminamos
                        for( let j = 0; j < arrFicha.length; j++){
                            if ( arrFicha[j] == this.ultimaFichaClickeada) {
                                arrFicha.splice(j, 1);
                                j--;
                            }
                        }
                        this.tablero.dibujarTablero();
                        break;
                    }
                }
            }
        }else{
            this.tablero.dibujarTablero();
        }
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