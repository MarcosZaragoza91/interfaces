class Juego{
    constructor(canvas,modoJuego){
        this.canvas = document.querySelector('#myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.jugador1=new Jugador(1);
        this.jugador2=new Jugador(2);
        this.tablero= new Tablero(canvas);
        this.turno = this.jugador1;//esto tiene jugador
        this.ganador;
        this.isMouseDown=false;
        this.ultimaFichaClickeada = null;
        this.modoJuego = modoJuego;
    }

    setModoJuego(){
        switch (this.modoJuego) {

            case 4:
                this.tablero.setFilas(6);
                this.tablero.setColumnas(7);
                this.canvas.className = "container-canvas-4";
                break;
            case 5:
        }
    }

    nuevoJuego(){
        this.tablero.crearTablero();
        this.tablero.cargarFichasJugadorPorJugador(this.jugador1,this.jugador2);
    }

    checkearGanador(x1,y1){
        if(this.tablero.checkaerEnVertical(x1)){ //falta implementar checkear en diagonal
            alert("hay ganador");
            return true;
        }else if(this.tablero.checkearEnHorizontal(y1)){
            alert("hay ganador");
            return true;
        }else if(this.tablero.checkearDiagonales(x1,y1)){
            alert("hay ganador");
            return true;
        }
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
            let jugadorFicha = fichaClickeada.getJugador();
            if (this.turno.getTurno() == jugadorFicha.getTurno()){
                fichaClickeada.setSeleccionada(true);//setea la ficha en true
                this.ultimaFichaClickeada = fichaClickeada; // y guarda la ultima clickeada
            }else{
                alert('Debe jugar la ficha el siguiente jugador');
            }
        }
         this.tablero.dibujarTablero(); //borra y dibuja el canvas
    }
         
        
    onMouseMove(e){
        if(this.isMouseDown==true && this.ultimaFichaClickeada !=null){//si el mouse esta abajo y hay una ficha clickeada
            let x= Math.floor(e.layerX/100);
            let y= Math.floor(e.layerY/100);
            this.ultimaFichaClickeada.setPosicionCanvas(x,y); //le pasa la posicion
            this.tablero.dibujarTablero(); //borra y dibuja
        }
    }

    onMouseUp(e){
        this.isMouseDown=false;
        let arrCasillero = this.tablero.getMatriz();
        let rangoLimite = 30;
        let filaSeleccionada=0;
        let x= Math.floor(e.layerX/100)+1;
        let y= Math.floor(e.layerY/100);
        let jugable = this.tablero.checkPosicionTablero(e.layerX,e.layerY);
        if (this.ultimaFichaClickeada != null){
            if (jugable){
                for (let i = (arrCasillero[x].length-1) ; i > 0; i--) {
                    let casillero = arrCasillero[x][i];
                    if (casillero.getFicha()== null){
                        let arrFicha = this.tablero.getArrFichas();
                        if(arrFicha[0] != null){
                            arrCasillero[x][i].setFicha(this.ultimaFichaClickeada);
                            console.log(arrCasillero[x][i]);
                            filaSeleccionada=i;
                            //Buscamos la ficha dentro del arreglo y la eliminamos
                            for( let j = 0; j < arrFicha.length; j++){
                                if ( arrFicha[j] == this.ultimaFichaClickeada) {
                                    arrFicha[j].setUsada(true);
                                    // arrFicha.splice(j, 1);
                                    // j--;
                                }
                            }
                            if (this.turno == this.jugador1)
                                this.setTurno(this.jugador2);
                            else{
                                this.setTurno(this.jugador1);
                            }
                            this.tablero.dibujarTablero();
                            break;
                        }
                    }

                }
                console.log("variable filaSeleccionada" + filaSeleccionada)
                this.checkearGanador(x,filaSeleccionada);
            }else{
                this.ultimaFichaClickeada.setSeleccionada(false);
                this.tablero.dibujarTablero();
                console.log("ACA ESTOY-------------------------");
                console.log(this.tablero.getArrFichas());
            }
        }
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

}