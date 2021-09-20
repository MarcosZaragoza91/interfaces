class Tablero{

    constructor(){
        this.canvas = document.querySelector('#myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.columnas = 7;
        this.filas =6;
    }

    dibujarTablero(){
        let x=400;
        let y=50;
        for (let i = 0; i < this.columnas; i++) {
            for (let j = 0; j < this.filas; j++) {
                this.ctx.fillStyle = 'white';
                this.ctx.beginPath();
                this.ctx.arc(x,y,30,0,2*Math.PI);
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
                this.ctx.fill();
                y+=100;
            }
            x+=100;
            y=50;
        }
    }
    seleccionarColumna(){

    }

    insertarFicha(){

    }

    checkearGanador(){
        this.checkaerVertical;
        this.checkearDiagonal;
        this.checkearHorizontal;
    }
    checkearHorizontal(){

    }
    checkaerVertical(){

    }
    checkearDiagonal(){

    }
}

