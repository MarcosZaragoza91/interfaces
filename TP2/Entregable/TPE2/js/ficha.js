class Ficha{
    constructor(fondo){
        this.fondo =fondo;
        this.img = new Image();
        //this.imagen = newImage();
        this.radio=15;
        this.posicion = {x: 0 , y:0}
        this.posicionCentro = {x: 0 , y:0}
        this.seleccionada = false;
        this.usada = false;
        
    }  

    setFondo(fondo){
        this.fondo=fondo;
    }

    getFondo(){
        return this.fondo;
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
    dibujarFondo(Image,x,y){
        ctx.drawImage(Image,x,y);
    }

    dibujarFicha(posX,posY,ctx){
        this.setPosicion(posX, posY);
        ctx.fillStyle = this.getFondo();
        ctx.beginPath();
        ctx.arc(this.posicion.x, this.posicion.y, this.radio*2, 0, Math.PI * 2);
        ctx.fill();
        this.img.src = this.fondo;
        this.img.onload = function(){
            dibujarFondo(this,this.posicion.x,this.posicion.y);
        }
        if(this.esSeleccionada === true ){
            ctx.lineWidth =5;
            ctx.arc(this.posicion.x, this.posicion.y, this.radio*2, 0, Math.PI * 2);
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
}
