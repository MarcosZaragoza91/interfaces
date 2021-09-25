class Ficha{
    constructor(fondo){
        this.fondo =fondo;
        this.img = new Image();
        //this.imagen = newImage();
        this.radio=15;
        this.posicionCanvas = {x:0 , y:0};
        this.posicionMatriz = {x: 0 , y:0};
        this.posicionCentro = {x: 0 , y:0};
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
    setPosicionCanvas(posX, posY) {
        this.posicionCanvas.x=posX;
        this.posicionCanvas.y=posY;
        this.posicionCentro.x=posX+this.radio;
        this.posicionCentro.y=posY+this.radio;
    }

    setPosicionMatriz(posX, posY){
        this.posicionMatriz.x = posX;
        this.posicionMatriz.y = posY;
    }

    dibujarFondo(Image,x,y){
        ctx.drawImage(Image,x,y);
    }

    dibujarFicha(posX,posY,ctx){
        this.setPosicionCanvas((posX+1)*100, (posY+1)*100);
        this.setPosicionMatriz(posX,posY);
        ctx.fillStyle = '#FF0000';
        ctx.beginPath();
        ctx.arc((posX+1)*100, (posY+1)*100, this.radio*2, 0, Math.PI * 2);
        ctx.fill();
        // this.img.src = this.fondo;
        // this.img.onload = function(){
        //     dibujarFondo(this.img,this.posicion.x,this.posicion.y, this.radio * 2, this.radio * 2);
        // }
        if(this.esSeleccionada === true ){
            ctx.lineWidth =5;
            ctx.arc(this.posicion.x, this.posicion.y, this.radio*2, 0, Math.PI * 2);
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
}
