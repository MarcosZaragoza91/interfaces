class Juego{
    constructor(){
        this.canvas = document.querySelector('#myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.jugador1=new Jugador(1);
        this.jugador2=new Jugador(2);
        this.tablero= new Tablero();
        this.turno;
        this.ganador;
        this.isMouseDown=false;
        this.ultimaFichaClickeada = null;
    }

    
    cargarFichas(){
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
        console.log(this.jugador1);
        console.log(this.jugador2);
    }
    nuevoJuego(){
        this.tablero.dibujarTablero();
        //this.setJugadores();
        this.cargarFichas();
    }

    limpiarCanvas() {
        this.ctx.fillStyle = "rgb(255,255,255)";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    reDibujar() {
        this.limpiarCanvas();
        this.tablero.dibujarTablero();
        //this.setTurno(); falta implementar
        this.dibujarFichas();
    }
    
    dibujarFichas() {
        for (let i = 0; i < this.jugador1.fichas.length; i++) {
            this.jugador1.fichas[i].setFicha();        }
        for (let j = 0; j < this.jugador2.fichas.length; j++) {
            this.jugador2.fichas[j].setFicha();
        }
    }

    onMouseDown(e){
        this.isMouseDown= true;
        if(this.isMouseDown== true && this.ultimaFichaClickeada != null){ //si tengo clickeada una ficha y voy a clickear otra
            this.ultimaFichaClickeada.setSeleccionada(false);        // le saco el resaltado a la anterior y dejod e guardarla
            this.ultimaFichaClickeada =null;
        }
        let fichaClickeada1 = this.jugador1.seleccioneFicha(e.layerX , e.layerY); //se fija si tiene seleccionada una ficha
        let fichaClickeada2  = this.jugador2.seleccioneFicha(e.layerX , e.layerY);
        console.log(fichaClickeada1);
        console.log(fichaClickeada2);
        if(fichaClickeada1 != null){ //si la tiene
           fichaClickeada1.setSeleccionada(true);//setea la ficha en true
           this.ultimaFichaClickeada = fichaClickeada1; // y guarda la ultima clickeada
        }else if(fichaClickeada2!=null){
           fichaClickeada2.setSeleccionada(true);
           this.ultimaFichaClickeada = fichaClickeada2;
        } 

         console.log(this.ultimaFichaClickeada);
         this.reDibujar(); //borra y dibuja el canvas 
    }       
         
        
    onMouseMove(e){
        if(this.isMouseDown==true && this.ultimaFichaClickeada !=null){//si el mouse esta abajo y hay una ficha clickeada
            this.ultimaFichaClickeada.setPosicion(e.layerX,e.layerY); //le pasa la posicion
            reDibujar(); //borra y dibuja 
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