class Juego{
    constructor(canvas,cantidadLineas,columnas,filas,fondoj1,fondoj2){
        this.canvas = document.querySelector('#myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.jugador1=new Jugador(1);
        this.jugador2=new Jugador(2);
        this.tablero= new Tablero(canvas,cantidadLineas,columnas,filas);
        this.turno = this.jugador1;
        this.ganador=0;
        this.isMouseDown=false;
        this.ultimaFichaClickeada = null;
        this.modoJuego = cantidadLineas;
        this.fondoj1=fondoj1;
        this.fondoj2=fondoj2;
    }
    getTurno(){
        return this.turno;
    }    
    
    setTurno(jugador){
        this.turno = jugador;
    }
    
    cambiarTurno(){
    
    }
    
    getGanador(){
        return this.ganador;
    }

    nuevoJuego(){
        this.tablero.crearTablero();
        this.tablero.cargarFichasJugadorPorJugador(this.jugador1,this.jugador2,this.fondoj1,this.fondoj2);
    }

    checkearGanador(x1,y1){ // le paso la posicion x e y al momento de ser insertada en un casillero del tablero
        if(this.tablero.checkaerEnVertical(x1)){  
            this.ganador = this.ultimaFichaClickeada.getNumJugador();
            this.tablero.limpiarCanvas();
            this.tablero.dibujarTableroFinal(this.ganador);
        }else if(this.tablero.checkearEnHorizontal(y1)){
            this.ganador = this.ultimaFichaClickeada.getNumJugador();
            this.tablero.limpiarCanvas();
            this.tablero.dibujarTableroFinal(this.ganador);
        }else if(this.tablero.checkearDiagonales(x1,y1)){
            this.ganador = this.ultimaFichaClickeada.getNumJugador();
            this.tablero.limpiarCanvas();
            this.tablero.dibujarTableroFinal(this.ganador);
        }
    }

    onMouseDown(e){
        if (this.ganador == 0){ //si no contengo ganador
            this.isMouseDown= true;
            if(this.isMouseDown== true && this.ultimaFichaClickeada != null){ //si tengo clickeada una ficha y voy a clickear otra
                this.ultimaFichaClickeada.setSeleccionada(false);        // le saco el resaltado a la anterior y dejod e guardarla
                this.ultimaFichaClickeada =null;
            }
            let fichaClickeada = this.tablero.seleccioneFicha(e.layerX , e.layerY); //se fija si tiene seleccionada una ficha
            if(fichaClickeada != null){ //si la tiene
                let jugadorFicha = fichaClickeada.getJugador(); //le pido el jugador
                if (this.turno.getTurno() == jugadorFicha.getTurno()){ //si el turno de la ficha corresponde con el turno del juego
                    fichaClickeada.setSeleccionada(true);//setea la ficha en true
                    this.ultimaFichaClickeada = fichaClickeada; // y guarda la ultima clickeada
                }else{
                    let modal = document.querySelector(".modal"); //cambio el msj del modal
                    document.querySelector('#modal-txt').innerHTML = "ES EL TURNO DEL OTRO JUGADOR";
                    modal.classList.remove("modal-oculto");
                    modal.classList.add("modal-visible");
                }
            }
            this.tablero.dibujarTablero(); //borra y dibuja el canvas
        }
    }
         
    onMouseMove(e){
        if (this.ganador == 0) { //SI NO CONTENGO GANADOR
            if (this.isMouseDown == true && this.ultimaFichaClickeada != null) {//si el mouse esta abajo y hay una ficha clickeada
                let x = Math.floor(e.layerX);
                let y = Math.floor(e.layerY);
                this.ultimaFichaClickeada.setPosicionCanvas(x, y); //le pasa la posicion
                this.tablero.dibujarTablero(); //borra y dibuja
            }
        }
    }

    onMouseUp(e){
        if (this.ganador == 0) { //Validamos que no haya ganados
            this.isMouseDown = false; //Determinamos que el jugador tiene una ficha seleccionada
            let arrCasillero = this.tablero.getMatriz(); //Traemos los casilleros del tablero
            let filaSeleccionada = 0; //Inicializamos para realizar la validacion del ganador por fila
            let x = Math.floor(e.layerX / 100) + 1; //Maneja la logica del tablero, haciendo esa cuenta para tomar por casillero
            let y = Math.floor(e.layerY / 100); //Maneja la logica del tablero, haciendo esa cuenta para tomar por casillero
            let jugable = this.tablero.checkPosicionTablero(e.layerX, e.layerY); //Logica para la jugabilidad de la ficha, no nos permite soltarla en cualquier lugar
            if (this.ultimaFichaClickeada != null && this.ultimaFichaClickeada.getSeleccionada()) { //Validamos que tengamos una ficha seleccionada
                if (jugable) { //Si es jugable nos permite acceder a la logica del juego
                    for (let i = (arrCasillero[x].length - 1); i > 0; i--) { //Recorremos el tablero para verificar espacios libres en la columna
                        let casillero = arrCasillero[x][i];
                        if (casillero.getFicha() == null) { //Checkeamos el casillero de la columna no tenga una ficha
                            let arrFicha = this.tablero.getArrFichas();
                            arrCasillero[x][i].setFicha(this.ultimaFichaClickeada);
                            filaSeleccionada = i;
                            //Buscamos la ficha dentro del arreglo
                            for (let j = 0; j < arrFicha.length; j++) {
                                if (arrFicha[j] == this.ultimaFichaClickeada) {
                                    arrFicha[j].setUsada(true);
                                }
                            }
                            if (this.turno == this.jugador1)
                                this.setTurno(this.jugador2);
                            else {
                                this.setTurno(this.jugador1);
                            }
                            this.tablero.dibujarTablero();
                            break;
                        }
                    }
                    this.checkearGanador(x, filaSeleccionada);
                } else {
                    this.ultimaFichaClickeada.setSeleccionada(false);
                    this.tablero.dibujarTablero();
                }
            }
        }
    }
}