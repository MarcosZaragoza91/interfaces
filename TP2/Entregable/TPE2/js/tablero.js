class Tablero{

    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.columnas = 7;
        this.casillero = new Casillero();
        this.filas = 6;
        this.colFichas = this.columnas + 6;
        this.matriz =[];
        this.arrFichas=[];
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
                this.casillero = new Casillero();
                this.casillero.setPosicionesCasillero(x,y);
                this.ctx.beginPath();
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.arc((x+1)* this.casillero.getWidth(),(y+1)* this.casillero.getHeigth(),30,0,2*Math.PI);
                this.ctx.lineWidth = 2;
                this.ctx.fill();
                this.ctx.stroke();
                this.casillero.setPosicionCanvas((x+1)* this.casillero.getWidth(),(y+1)* this.casillero.getHeigth());
                this.matriz[x][y] = this.casillero;
            }
        }
    }

    //las fichas las vamos a cargar en un espacio con un random para luego ir sacandolas aunque esten apiladas
    cargarFichasJugadorPorJugador(){
        for (let x = this.columnas + 1; x < this.colFichas; x++) {
            this.matriz [x] =[];
                for (let y = 0; y < this.filas; y++) {
                    if (y < this.filas/2){
                        this.casillero.setPosicionesCasillero(x,y);
                        let fondo1 = "images/fichaAzul.png";
                        let fichaJ1 = new Ficha(fondo1);
                        this.arrFichas.push(fichaJ1);
                        fichaJ1.dibujarFicha(x,y,this.ctx);
                        this.casillero.setPosicionCanvas((x+1)* this.casillero.getWidth(),(y+1)* this.casillero.getHeigth());
                    }else{
                        this.casillero.setPosicionesCasillero(x,y);
                        let fondo2 = "images/fichaRoja.png";
                        let fichaJ2 = new Ficha(fondo2);
                        this.arrFichas.push(fichaJ2);
                        fichaJ2.dibujarFicha(x,y,this.ctx);
                        this.casillero.setPosicionCanvas((x+1)* this.casillero.getWidth(),(y+1)* this.casillero.getHeigth());
                    }
                }
        }
    }

    //Esta funcion es para dibujar la ficha a la hora de jugar.
    dibujarCasillero(x,y,ficha){
        this.ctx.fillStyle = '#FF0000';
        this.ctx.beginPath();
        this.ctx.arc((x)* this.casillero.getWidth(),(y)* this.casillero.getHeigth(),30,0,2*Math.PI);
        this.ctx.lineWidth = 5;
        this.ctx.stroke();
    }
    dibujarFichas(){
        for (let i = 0; i < this.arrFichas.length; i++) {
            const element = this.arrFichas[i];
            element.reDibujarFicha(this.ctx);
        }
    }

    seleccioneFicha(x,y){
        for (let i = 0; i < this.arrFichas.length; i++) {
            const element = this.arrFichas[i];
            if(element.estoyAdentro(x,y)){
                return element;
            }
        }
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

