class Celda{
    constructor(){
        this.canvas = document.querySelector('#myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.xcomienzo=0;
        this.ycomienzo=0;
        this.xfinal=0;
        this.yfinal=0;
        this.ficha=Boolean;
    }

    setFicha(Ficha){
        this.ficha=Ficha;
    }
    getFicha(){
        return this.ficha;
    }

    setPosicionesCelda(xC,yC,xF,yF){
        this.xcomienzo=xC;
        this.ycomienzo=yC;
        this.xfinal=xF;
        this.yfinal=yF;
    }

    getPosicionesCelda(){
        return posicionCelda  = {
           xComienzo : this.xcomienzo,
           yComienzo: this.ycomienzo,
           xFinal: this.xfinal,
           yFinal: this.yfinal
        };
    }

    dibujarCelda(xC,yC){
        this.ctx.fillStyle = 'white';
                this.ctx.beginPath();
                this.ctx.arc(xC,yC,30,0,2*Math.PI);
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
                this.ctx.fill();
    }

}