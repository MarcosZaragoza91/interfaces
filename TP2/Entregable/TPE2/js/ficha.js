class Ficha{
    constructor(fondo,jugador){
        this.fondo =fondo;
        this.img = new Image();
        this.radio=15;
        this.posicionCanvas = {x:0 , y:0};
        this.posicionMatriz = {x: 0 , y:0};
        this.posicionCentro = {x: 0 , y:0};
        this.seleccionada = false;
        this.usada = false;
        this.jugador=jugador;
    }  

    setPosicionCanvas(posX, posY) {
        this.posicionCanvas.x=posX;
        this.posicionCanvas.y=posY;
        this.posicionCentro.x=posX+this.radio;
        this.posicionCentro.y=posY+this.radio;
    }

    getPosicionMatriz(){
        return this.posicionMatriz;
    }
    
    setPosicionMatriz(posX, posY){
        this.posicionMatriz.x = posX;
        this.posicionMatriz.y = posY;
    }

    getPosicionCanvas(){
        return this.posicionCanvas;
    }
    
    dibujarFicha(posX,posY,ctx){
        this.setPosicionCanvas((posX+1)*100, (posY+1)*100);
        this.setPosicionMatriz(posX,posY);
        ctx.fillStyle = '#FF0000';
        ctx.beginPath();
        ctx.arc((posX+1)*100, (posY+1)*100, this.radio*2, 0, Math.PI * 2);
        ctx.fill();
        this.img.src = this.fondo;
        let cargarImg = function(){
            ctx.drawImage(this.img, this.posicionCanvas.x-this.radio, this.posicionCanvas.y-this.radio, this.radio * 2, this.radio * 2);
        };
        this.img.onload = cargarImg.bind(this);
    
        if(this.esSeleccionada === true ){
            ctx.lineWidth =5;
            ctx.arc(this.posicion.x, this.posicion.y, this.radio*2, 0, Math.PI * 2);
        }
    }
    
    reDibujarFicha(ctx){ //codigo repetido ver...
        ctx.fillStyle = '#FF0000';
        ctx.beginPath();
        ctx.arc(this.posicionCanvas.x,this.posicionCanvas.y , this.radio*2, 0, Math.PI * 2);
        ctx.fill();
        this.img.src = this.fondo;
        let cargarImg = function(){
            ctx.drawImage(this.img, this.posicionCanvas.x-this.radio, this.posicionCanvas.y-this.radio, this.radio * 2, this.radio * 2);
        };
        this.img.onload = cargarImg.bind(this);
        /*this.cellImage.onload = function () {
            this.drawBoard();
        }.bind(this);
        */
    }

    estoyAdentro(posX,posY){
        let x = this.posicionCanvas.x-posX;
        let y = this.posicionCanvas.y-posY;
        return Math.sqrt(x*x + y*y)< this.radio;
    }
    
    setSeleccionada(boolean){
        this.seleccionada = boolean;
    }
    setUsada(boolean){
        this.usada=boolean;
    }
    setFondo(fondo){
        this.fondo=fondo;
    }

    getFondo(){
        return this.fondo;
    }

    getSeleccionada(){
        return this.seleccionada;
    }

    fueUsada(){
      return this.fueUsada;  
    }

    getPosicion(){
        return this.posicion;
    }

    getRadio(){
        return this.radio;
    }

    getImagen(){
        return this.img;
    }

    setJugador(jugador){
        this.jugador = jugador;
    }

    getJugador(){
        return this.jugador;
    }
    getNumJugador(){
        return this.jugador.getTurno();
    }
}
