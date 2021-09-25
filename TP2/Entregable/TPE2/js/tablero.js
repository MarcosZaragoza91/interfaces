class Tablero{

    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.columnas = 7;
        this.casillero = new Casillero();
        this.filas = 6;
        this.matriz =[];
    }

    setColumnas(columnas){
        this.columnas = columnas;
    }
    getColumnas(){
        return this.columnas;
    }
    setFilas(filas){
        this.filas = filas;
    }
    getFilas(){
        return this.filas;
    }
/*
    adaptarTableroAlCanvas(){
        let anchoColumnas = this.range / this.columnas;
        let altoFilas = this.width /  this.filas;
        return {
            anchoColumnas,
            altoFilas
        };
    }
*/
    dibujarTablero(){
      //  let valores = this.adaptarTableroAlCanvas();
        for (let x = 0; x < this.columnas; x++) {
            this.matriz [x] =[];
            for (let y = 0; y < this.filas; y++) {
                let auxCasillero = new Casillero();
                auxCasillero.setPosicionesCasillero(x,y);
                this.ctx.fillStyle = 'white';
                this.ctx.beginPath();
                this.ctx.arc((x+1)* auxCasillero.getWidth(),(y+1)* auxCasillero.getHeigth(),30,0,2*Math.PI);
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
                auxCasillero.setPosicionCanvas((x+1)* auxCasillero.getWidth(),(y+1)* auxCasillero.getHeigth());
                this.matriz[x][y] = auxCasillero;
            }
        }
    }


    seleccionarColumna(){

    }

    getXlines(){
        return this._Xlines;
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

