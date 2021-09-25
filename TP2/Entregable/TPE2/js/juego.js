class Juego{
    constructor(canvas){
        this.canvas = document.querySelector('#myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.jugador1=new Jugador(1);
        this.jugador2=new Jugador(2);
        this.tablero= new Tablero(canvas);
        this.turno;
        this.ganador;
        this.isMouseDown=false;
        this.ultimaFichaClickeada = null;
    }

    nuevoJuego(){
        this.tablero.dibujarTablero();
        //this.setJugadores();
        this.tablero.cargarFichasJugadorPorJugador();
    }

    limpiarCanvas() {
        this.ctx.fillStyle = "rgb(122, 122, 214)";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    reDibujar() {
        this.limpiarCanvas();
        this.tablero.dibujarTablero();
        //this.setTurno(); falta implementar
        this.tablero.dibujarFichas(this.ctx);
    }

    onMouseDown(e){
        e.layerX;
        e.layerY;
        console.log(e.layerX);
        console.log(e.layerY);
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
         this.reDibujar(); //borra y dibuja el canvas 
    }       
         
        
    onMouseMove(e){
        if(this.isMouseDown==true && this.ultimaFichaClickeada !=null){//si el mouse esta abajo y hay una ficha clickeada
            this.ultimaFichaClickeada.setPosicionCanvas(e.layerX,e.layerY); //le pasa la posicion
            this.reDibujar(); //borra y dibuja
        }
    }

    onMouseUp(){
        this.isMouseDown=false;
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