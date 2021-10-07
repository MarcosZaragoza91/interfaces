class Tablero{

    constructor(canvas,cantidadLineas,columnas,filas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.columnas = columnas;
        this.casillero = new Casillero();
        this.filas = filas;
        this.colFichas = this.columnas + 7;
        this._matriz = [];
        this._arrFichas=[];
        this.cantLineas = cantidadLineas;
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

    crearTablero(){
        this.setTablero();
        for (let x = 1; x <= this.columnas; x++) {
            this._matriz [x] =[];
            for (let y = 1; y <= this.filas; y++) {
                this.casillero = new Casillero();
                this.casillero.setPosicionesCasillero(x,y);
                this.ctx.beginPath();
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.arc((x)* this.casillero.getWidth()-50,(y+1)* this.casillero.getHeigth()-50,30,0,2*Math.PI);
                this.ctx.lineWidth = 2;
                this.ctx.fill();
                this.ctx.stroke();
                this.casillero.setPosicionCanvas((x)* this.casillero.getWidth(),(y+1)* this.casillero.getHeigth());
                this._matriz[x][y] = this.casillero;
            }
        }
    }

    limpiarCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    setTablero(){
        this.ctx.beginPath();
        this.ctx.fillStyle = "#333333";
        this.ctx.fillRect(0,0,this.columnas*this.casillero.getWidth(), this.casillero.getHeigth())
        this.ctx.fillStyle = "#777777";
        this.ctx.fillRect(0, 100, this.columnas*this.casillero.getWidth(), this.filas*this.casillero.getHeigth());
    }

   dibujarTablero(){
        this.limpiarCanvas();
        this.setTablero();
        for (let x = 1; x <= this.columnas; x++) {
            for (let y = 1; y <= this.filas; y++) {
                    if (this._matriz[x][y].getFicha() != null){
                        let ficha = this._matriz[x][y].getFicha();
                        ficha.setPosicionCanvas(x-1, y);
                        ficha.dibujarFicha(this.ctx);
                    }else{
                        this.ctx.beginPath();
                        this.ctx.fillStyle = '#FFFFFF';
                        this.ctx.arc((x) * this._matriz[x][y].getWidth()-50, (y + 1) * this._matriz[x][y].getHeigth()-50, 30, 0, 2 * Math.PI);
                        this.ctx.lineWidth = 2;
                        this.ctx.fill();
                        this.ctx.stroke();
                    }
                }
            }

        for (let i = 0; i < this._arrFichas.length; i++) {
           const element = this._arrFichas[i];
           element.dibujarFicha(this.ctx);
       }
      // console.log(this._matriz);
   }

    dibujarTableroFinal(ganador){
        this.limpiarCanvas();
        this.setTablero();
        for (let x = 1; x <= this.columnas; x++) {
            for (let y = 1; y <= this.filas; y++) {
                if (this._matriz[x][y].getFicha() != null){
                    let ficha = this._matriz[x][y].getFicha();
                    ficha.setPosicionCanvas(x-1, y);
                    ficha.dibujarFicha(this.ctx);
                }else{
                    this.ctx.beginPath();
                    this.ctx.fillStyle = '#FFFFFF';
                    this.ctx.arc((x) * this._matriz[x][y].getWidth()-50, (y + 1) * this._matriz[x][y].getHeigth()-50, 30, 0, 2 * Math.PI);
                    this.ctx.lineWidth = 2;
                    this.ctx.fill();
                    this.ctx.stroke();
                }
            }
        }
        //Agregar alguna animacion
        this.ctx.font = "40px Purisa";
        this.ctx.fillStyle = "#555555";
        this.ctx.fillText("Gano Jugador: "+ganador, 900, 150);
    }


    //las fichas las vamos a cargar en un espacio con un random para luego ir sacandolas aunque esten apiladas
    cargarFichasJugadorPorJugador(jugador1,jugador2){
        for (let x = this.columnas + 1; x < this.colFichas; x++) {
            for (let y = 0; y < this.filas; y++) {
                if (y < this.filas/2){
                   
                    let fondo1 = "images/fichaNegra.png";
                    let fichaJ1 = new Ficha(fondo1,jugador1);
                    this._arrFichas.push(fichaJ1);
                    fichaJ1.setPosicionMatriz(x,y);
                    fichaJ1.setPosicionInicial(x,y);
                    fichaJ1.setPosicionCanvas(x,y)
                    fichaJ1.dibujarFicha(this.ctx);
                }else{
                    let fondo2 = "images/fichaVioleta.png";
                    let fichaJ2 = new Ficha(fondo2,jugador2);
                    this._arrFichas.push(fichaJ2);
                    fichaJ2.setPosicionMatriz(x,y);
                    fichaJ2.setPosicionInicial(x,y);
                    fichaJ2.setPosicionCanvas(x,y)
                    fichaJ2.dibujarFicha(this.ctx);
                }
            }
        }
    }

    seleccioneFicha(x,y){
        for (let i = 0; i < this._arrFichas.length; i++) {
            const element = this._arrFichas[i];
            if(element.estoyAdentro(x,y)){
                return element;
            }
        }
    }
    
    checkaerEnVertical(x){ //x seria la posicionX que tiene la ultima ficha clieckeada
        console.log(x);
        let cantMismaLinea = 1;
        let columnaSeleccionada = this._matriz[x];
        console.log(columnaSeleccionada);

        for (let i = this.filas; i > 1; i--) {
            if(columnaSeleccionada[i].getFicha() !== null && columnaSeleccionada[i-1].getFicha() !== null ){//me fijo si en esas posiciones hay algunas fichas
                if(columnaSeleccionada[i].getJugadorFicha() == columnaSeleccionada[i-1].getJugadorFicha()){// si las dos fichas contienen el mismo nuemero jugador
                    cantMismaLinea++; 
                    console.log(this.cantLineas);
                    if(cantMismaLinea==this.cantLineas){//aca deberiamos ver si juega 4,6,7 en linea pasarle por parametro el valor elige
                        return true;
                    }
                }else{
                    cantMismaLinea=1;
                }
            }else{
                break;
            }
        }
        return false; 
    } 
    checkearEnHorizontal(y){///y seria la posicionY que tiene la ultima ficha clieckeada
        console.log(y);
        let cantMismaLinea = 1;
        for (let i = 1; i < this.columnas; i++) {
            if (this._matriz[i][y].getFicha() !== null && this._matriz[i+1][y].getFicha() !== null) {
                if (this._matriz[i][y].getJugadorFicha() == this._matriz[i+1][y].getJugadorFicha()) {
                    cantMismaLinea ++;
                    if (cantMismaLinea == this.cantLineas)
                        return true;
                }else{
                    cantMismaLinea=1;
                }
            }else{
                cantMismaLinea=1;
            }
        } 
        return false;
    }

    checkearDiagonales(x,y){
        let valor = 0;
        let ValorTotal = this.getValorDiagonalAbajoIzq(x,y,valor);
        ValorTotal = ValorTotal + this.getValorDiagonalArribaDer(x,y,valor);
        if (ValorTotal >= this.cantLineas-1){
            return true;
        }else{
            ValorTotal = this.getValorDiagonalAbajoDer(x,y,valor);
            ValorTotal = ValorTotal + this.getValorDiagonalArribaIzq(x,y,valor);
            if (ValorTotal >= this.cantLineas-1){
                return true;
            }
        }
        return false;
    }

    getValorDiagonalAbajoIzq(x,y,valor){
        for (y ; y <= this.filas; y++) {
            if (x<=1 || x > this.columnas || y < 1 || y >= this.filas){
                return valor;
            }else{
                if (this._matriz[x-1][y+1].getFicha() != null){
                    if (this._matriz[x][y].getJugadorFicha() == this._matriz[x-1][y+1].getJugadorFicha()){
                        x--;
                        valor++;
                    }else{
                        return valor;
                    }
                }else{
                    return valor;
                }
            }
        }
    }

    getValorDiagonalArribaDer(x,y,valor){
        for (y ; y >= 1; y--) {
            if (x<1 || x >= this.columnas || y <= 1 || y > this.filas){
                return valor;
            }else{
                if (this._matriz[x+1][y-1].getFicha() != null){
                    if (this._matriz[x][y].getJugadorFicha() == this._matriz[x+1][y-1].getJugadorFicha()){
                        x++;
                        valor++;
                    }else{
                        return valor;
                    }
                }else{
                    return valor;
                }
            }
        }
    }

    getValorDiagonalAbajoDer(x,y,valor){
        for (y ; y <= this.filas; y++) {
            if (x<1 || x >= this.columnas || y < 1 || y >= this.filas){
                return valor;
            }else{
                if (this._matriz[x+1][y+1].getFicha() != null) {
                    if (this._matriz[x][y].getJugadorFicha() == this._matriz[x + 1][y + 1].getJugadorFicha()) {
                        x++;
                        valor++;
                    } else {
                        return valor;
                    }
                }else{
                    return valor;
                }
            }
        }
    }

    getValorDiagonalArribaIzq(x,y,valor){
        for (y ; y >= 1; y--) {
            if (x<=1 || x > this.columnas || y <= 1 || y > this.filas){
                return valor;
            }else {
                if (this._matriz[x-1][y-1].getFicha() != null) {
                    if (this._matriz[x][y].getJugadorFicha() == this._matriz[x-1][y-1].getJugadorFicha()) {
                        x--;
                        valor++;
                    } else {
                        return valor;
                    }
                }else{
                    return valor;
                }
            }
        }
    }
    
    checkPosicionTablero(posX,posY){
        let limiteHorizontal = this.columnas*this.casillero.getWidth();
        if (posX < limiteHorizontal && posY < this.casillero.getHeigth()){
            return true;
        }else{
            return false;
        }
    }

    getArrFichas() {
        return this._arrFichas;
    }
}

