class Ficha{
    constructor(color){
        this.canvas = document.querySelector('#myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.color = color;
      //  this.imagen = newImage();
        this.radio=15;
        this.posicion = {x: 0 , y:0}
        this.posicionCentro = {x: 0 , y:0}
        this.seleccionada = false;
        this.usada = false;
    }

    getColor(){
        return this.color;
    }    

    esSeleccionada(){
        return this.seleccionada;
    }
    fueUsada(){
      return this.fueUsada;  
    }
    getPosicion(){
        return this.posicion;
    }
    setPosicion(posX, posY) {
        this.posicion.x=posX;
        this.posicion.y=posY;
        this.posicionCentro.x=posX+this.radio;
        this.posicionCentro.y=posY+this.radio;
    }

    dibujarFicha(posX,posY){
        this.setPosicion(posX, posY);
        this.ctx.fillStyle = this.getColor();
        this.ctx.beginPath();
        this.ctx.arc(this.posicion.x, this.posicion.y, this.radio*2, 0, Math.PI * 2);
        this.ctx.fill();

        if(this.esSeleccionada == true ){
            this.ctx.lineWidth =5;
            this.ctx.arc(this.posicion.x, this.posicion.y, this.radio*2, 0, Math.PI * 2);
        }
    }

    estoyAdentro(posX,posY){
        let x = this.posicion.x-posX;
        let y = this.posicion.x-posY;
        return Math.sqrt(x*x + y*y)< this.radio;
    }
    setSeleccionada(boolean){
        this.seleccionada = boolean;
    }
    setUsada(boolean){
        this.usada=boolean;
    }
    setFicha() {
        this.dibujarFicha(this.posicion.x, this.posicion.y);
    }

}