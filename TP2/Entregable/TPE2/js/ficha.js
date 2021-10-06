class Ficha{
    constructor(fondo,jugador){
        this.fondo =fondo;
        this.img = new Image();
        this.radio=15;
        this.posicionCanvas = {x:0 , y:0};
        this.posicionMatriz = {x: 0 , y:0};
        this.posicionCentro = {x: 0 , y:0};
        this.posicionInicial = {x:0 , y:0};
        this.seleccionada = false;
        this.usada = false;
        this.jugador=jugador;
    }

    setPosicionCanvas(posX, posY) {
        this.posicionCanvas.x=(posX+1)*100-50;
        this.posicionCanvas.y=(posY+1)*100-50;
        this.posicionCentro.x=(posX+1)*100-50+this.radio;
        this.posicionCentro.y=(posY+1)*100-50+this.radio;
    }

    setPosicionInicial(posX,posY){
        this.posicionInicial.x=(this.posicionMatriz.x)*100+50;
        this.posicionInicial.y=(this.posicionMatriz.y)*100+50;
    }
    
    setPosicionMatriz(posX, posY){
        this.posicionMatriz.x = posX;
        this.posicionMatriz.y = posY;
    }

    getPosicionCanvas(){
        return this.posicionCanvas;
    }

    getPosicionInicial(){
        return this.posicionInicial;
    }
    
    dibujarFicha(ctx){
        if (this.usada || this.seleccionada){
            ctx.beginPath();
            ctx.arc(this.posicionCanvas.x,this.posicionCanvas.y , this.radio*2, 0, Math.PI * 2);
                if (this.img.src == "") {
                this.img.src = this.fondo;
                let cargarImg = function () {
                    ctx.drawImage(this.img, this.posicionCanvas.x-(this.radio*2), this.posicionCanvas.y-(this.radio*2), this.radio * 4, this.radio * 4);
                };
                this.img.onload = cargarImg.bind(this);
            } else{//cuando ya la tiene cargada, solamente dibuja
                ctx.drawImage(this.img, this.posicionCanvas.x-(this.radio*2), this.posicionCanvas.y-(this.radio*2), this.radio * 4, this.radio * 4);
            }
            ctx.closePath();
            ctx.fillStyle = "rgba(255,255,255,0.3)";//cuando este seleccionada se aplica un estilo
            ctx.fill();
        }else{
            ctx.beginPath();
            ctx.arc(this.posicionInicial.x,this.posicionInicial.y , this.radio*2, 0, Math.PI * 2);
            if (this.img.src == "") {
                this.img.src = this.fondo;
                let cargarImg = function () {
                    ctx.drawImage(this.img, this.posicionInicial.x-(this.radio*2), this.posicionInicial.y-(this.radio*2) , this.radio * 4, this.radio * 4);
                };
                this.img.onload = cargarImg.bind(this);
            } else{
                ctx.drawImage(this.img, this.posicionInicial.x-(this.radio*2), this.posicionInicial.y-(this.radio*2), this.radio * 4, this.radio * 4);
            }
            ctx.closePath();
            this.setPosicionCanvas(this.posicionMatriz.x,this.posicionMatriz.y);
        }
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

    getUsada(){
      return this.usada;
    }

    getPosicionCentro(){
        return this.posicionCentro;
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
