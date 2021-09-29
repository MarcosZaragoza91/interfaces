class Tablero{

    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.columnas = 7;
        this.casillero = new Casillero();
        this.filas = 6;
        this.colFichas = this.columnas + 6;
        this._matriz = [];
        this._arrFichas=[];
    }

    getMatriz() {
        return this._matriz;
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
    crearTablero(){
      //  let valores = this.adaptarTableroAlCanvas();
        for (let x = 0; x < this.columnas; x++) {
            this._matriz [x] =[];
            for (let y = 0; y <= this.filas; y++) {
                if (y == 0){
                    this.casillero.setPosicionesCasillero(x,y);
                    this._matriz[x][y] = this.casillero;
                    this.casillero.setTirada = true;
                }else{
                    this.casillero = new Casillero();
                    this.casillero.setPosicionesCasillero(x,y);
                    this.ctx.beginPath();
                    this.ctx.fillStyle = '#FFFFFF';
                    this.ctx.arc((x+1)* this.casillero.getWidth()-50,(y+1)* this.casillero.getHeigth()-50,30,0,2*Math.PI);
                    this.ctx.lineWidth = 2;
                    this.ctx.fill();
                    this.ctx.stroke();
                    this.casillero.setPosicionCanvas((x+1)* this.casillero.getWidth(),(y+1)* this.casillero.getHeigth());
                    this._matriz[x][y] = this.casillero;
                }
            }
        }
    }

    limpiarCanvas() {
        this.ctx.fillStyle = "rgb(122, 122, 214)";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    reDibujar() {
        this.limpiarCanvas();
        this.dibujarTablero();
        //this.setTurno(); falta implementar
        for (let i = 0; i < this._arrFichas.length; i++) {
            const element = this._arrFichas[i];
            element.reDibujarFicha(this.ctx);
        }
    }

    dibujarTablero(posX,posY){
        //  let valores = this.adaptarTableroAlCanvas();
        for (let x = 0; x < this.columnas; x++) {
            for (let y = 0; y <= this.filas; y++) {
                if (y == 0){
                    this.casillero.setPosicionesCasillero(x,y);
                    this._matriz[x][y] = this.casillero;
                }else {
                    if (x==posX && y==(posY-1)){
                        this.ctx.beginPath();
                        this.ctx.fillStyle = '#FF0000';
                        this.ctx.arc((x + 1) * this._matriz[x][y].getWidth() - 50, (y + 1) * this._matriz[x][y].getHeigth() - 50, 30, 0, 2 * Math.PI);
                        this.ctx.lineWidth = 2;
                        this.ctx.fill();
                        this.ctx.stroke();
                    }else{
                        this.ctx.beginPath();
                        this.ctx.fillStyle = '#FFFFFF';
                        this.ctx.arc((x + 1) * this._matriz[x][y].getWidth() - 50, (y + 1) * this._matriz[x][y].getHeigth() - 50, 30, 0, 2 * Math.PI);
                        this.ctx.lineWidth = 2;
                        this.ctx.fill();
                        this.ctx.stroke();
                    }
                }
            }
        }
    }

    //las fichas las vamos a cargar en un espacio con un random para luego ir sacandolas aunque esten apiladas
    cargarFichasJugadorPorJugador(){
        for (let x = this.columnas + 1; x < this.colFichas; x++) {
            for (let y = 0; y < this.filas; y++) {
                if (y < this.filas/2){
                    this.casillero.setPosicionesCasillero(x,y);
                    let fondo1 = "images/fichaAzul.png";
                    let fichaJ1 = new Ficha(fondo1);
                    this._arrFichas.push(fichaJ1);
                    fichaJ1.dibujarFicha(x,y,this.ctx);
                    this.casillero.setPosicionCanvas((x+1)* this.casillero.getWidth(),(y+1)* this.casillero.getHeigth());
                }else{
                    this.casillero.setPosicionesCasillero(x,y);
                    let fondo2 = "images/fichaRoja.png";
                    let fichaJ2 = new Ficha(fondo2);
                    this._arrFichas.push(fichaJ2);
                    fichaJ2.dibujarFicha(x,y,this.ctx);
                    this.casillero.setPosicionCanvas((x+1)* this.casillero.getWidth(),(y+1)* this.casillero.getHeigth());
                }
            }
        }
    }

    //Esta funcion es para dibujar la ficha a la hora de jugar.
    dibujarCasillero(x,y,ficha){
        this.limpiarCanvas();
        this.dibujarTablero(x,y);
        //ficha.reDibujarFichaJugada(x,y,this.ctx);
        // this.ctx.fillStyle = '#FF0000';
        // this.ctx.beginPath();
        // this.ctx.arc((x+1)* this.casillero.getWidth()-50,(y)* this.casillero.getHeigth()-50,30,0,2*Math.PI);
        // this.ctx.lineWidth = 5;
        // this.ctx.stroke();
    }

    seleccioneFicha(x,y){
        for (let i = 0; i < this._arrFichas.length; i++) {
            const element = this._arrFichas[i];
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

    getArrFichas() {
        return this._arrFichas;
    }
}

