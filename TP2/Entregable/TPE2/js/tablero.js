class Tablero{

    constructor(canvas,cantidadLineas,columnas,filas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.columnas = columnas;
        this.casillero = new Casillero();
        this.filas = filas;
        this.colFichas = this.columnas + columnas;
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
        for (let x = 1; x <= this.columnas; x++) {//por cada posicion de la columna creo un arreglo
            this._matriz [x] =[];
            for (let y = 1; y <= this.filas; y++) {
                this.casillero = new Casillero(); //creo un nuevo casillero
                this.casillero.setPosicionesCasillero(x,y); //le seteo las posiciones
                this.ctx.beginPath();
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.arc((x)* this.casillero.getWidth()-50,(y+1)* this.casillero.getHeigth()-50,30,0,2*Math.PI);
                this.ctx.lineWidth = 2;
                this.ctx.fill();
                this.ctx.stroke();
                this.casillero.setPosicionCanvas((x)* this.casillero.getWidth(),(y+1)* this.casillero.getHeigth());
                this._matriz[x][y] = this.casillero; //guardo el casillero en una posicion de la matriz
            }
        }
    }

    limpiarCanvas() { //limpio el canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    setTablero(){//agrego el estilo del tablero
        this.ctx.beginPath();
        this.ctx.fillStyle = "#67587300"; 
        this.ctx.fillRect(0,0,this.columnas*this.casillero.getWidth(), this.casillero.getHeigth())
        this.ctx.fillStyle = "rgba(72, 11, 138, 0.1)";
        this.ctx.fillRect(0, 100, this.columnas*this.casillero.getWidth(), this.filas*this.casillero.getHeigth());
    }

    dibujarTablero(){ //durante todo el juego
        this.limpiarCanvas();//primero limpio el canvas
        this.setTablero();// seteo el stylo del tablero
        for (let x = 1; x <= this.columnas; x++) {
            for (let y = 1; y <= this.filas; y++) {
                    if (this._matriz[x][y].getFicha() != null){//recorro la matriz si contiene ficha 

                        let ficha = this._matriz[x][y].getFicha(); //si la pos recorrida contiene una ficha
                        let posicionCasillero1 = this._matriz[x][y].getPosicionesCanvas(); //guardo la posicon del casillero q la contiene
                        ficha.setPosicionCanvas(posicionCasillero1.x-50, posicionCasillero1.y-50); //le seteo la pos de la ficha con los valores del casillero
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
           
        for (let i = 0; i < this._arrFichas.length; i++) { //recorro el arreglo de fichas
           const element = this._arrFichas[i];
           element.dibujarFicha(this.ctx);//dibujo la ficha 
        }
        
      
   }

   dibujarTableroFinal(ganador){ //si tengo ganador 
        this.limpiarCanvas(); //primero limpio el canvas
        this.setTablero(); // seteo el stylo del tablero
        for (let x = 1; x <= this.columnas; x++) {
            for (let y = 1; y <= this.filas; y++) {
                if (this._matriz[x][y].getFicha() != null){ //recorro la matriz si contiene ficha
                    let ficha = this._matriz[x][y].getFicha(); //si la pos recorrida contiene una ficha
                    let fichaPosCasillero = this._matriz[x][y].getPosicionesCanvas(); //guardo la posicon del casillero q la contiene
                    ficha.setPosicionCanvas(fichaPosCasillero.x-50 ,fichaPosCasillero.y-50);//le seteo la pos de la ficha con los valores del casillero 
                    ficha.dibujarFicha(this.ctx); //dibujo la ficha
                }else{ //sino contiene ficha solamente dibujo el casillero
                    this.ctx.beginPath();
                    this.ctx.fillStyle = '#FFFFFF';
                    this.ctx.arc((x) * this._matriz[x][y].getWidth()-50, (y + 1) * this._matriz[x][y].getHeigth()-50, 30, 0, 2 * Math.PI);
                    this.ctx.lineWidth = 2;
                    this.ctx.fill();
                    this.ctx.stroke();
                }
            }
        }

        if (ganador == 0){ //si no contiene un ganador
            let modal = document.querySelector(".modal"); //cambio el msj del modal
            document.querySelector('#modal-txt').innerHTML = "SE TERMINO EL TIEMPO";
            modal.classList.remove("modal-oculto");
            modal.classList.add("modal-visible");
        }else{ //cambio el msj del modal
            let modal = document.querySelector(".modal");
            document.querySelector('#modal-txt').innerHTML = "GANO EL JUGADOR " + ganador;
            modal.classList.remove("modal-oculto");
            modal.classList.add("modal-visible");
        }
    }

    cargarFichasJugadorPorJugador(jugador1,jugador2,fondoj1,fondoj2){
        for (let x = this.columnas + 1; x < this.colFichas; x++) {
            for (let y = 0; y < this.filas; y++) {
                if (y < this.filas/2){  // la cantidad de fichas es igual ala cantidad de columnas*filas

                    let fondo1 = fondoj1;//el fondo es el elegido
                    let fichaJ1 = new Ficha(fondo1,jugador1); //creo una nueva ficha pasandole el fondo y el jugador
                    this._arrFichas.push(fichaJ1); //agrego la ficha al arreglo de fichas
                    fichaJ1.setPosicionMatriz(x,y); //le seteo ala ficha la posicion en la matriz
                    let posxRandomJ1 = Math.round(Math.random() * (1300 - 950) + 950); // la posx de la ficha es aleatoria entre esos pixels del canvas
                    let posyRandomJ1=Math.round(Math.random() * (300 - 50) + 50);// la posy de la ficha es aleatoria entre esos pixels del canvas
                    fichaJ1.setPosicionInicial(posxRandomJ1,posyRandomJ1); // posicion inicial cuando se crea la ficha
                    fichaJ1.setPosicionCanvas(posxRandomJ1,posyRandomJ1)
                    fichaJ1.dibujarFicha(this.ctx); //dibujo la ficha
                }else{
                    let fondo2 = fondoj2;
                    let fichaJ2 = new Ficha(fondo2,jugador2);
                    this._arrFichas.push(fichaJ2);
                    let posxRandomJ2 = Math.round(Math.random() * (1300 - 950) + 950);
                    let posyRandomJ2=Math.round(Math.random() * ( 650- 350) + 350);
                    fichaJ2.setPosicionMatriz(x,y);
                    fichaJ2.setPosicionInicial(posxRandomJ2,posyRandomJ2);
                    fichaJ2.setPosicionCanvas(posxRandomJ2,posyRandomJ2)
                    fichaJ2.dibujarFicha(this.ctx);
                }
            }
        }
    }

    seleccioneFicha(x,y){ // recorro todas las fichas y me fijo si estoy adentro
        for (let i = 0; i < this._arrFichas.length; i++) {
            const element = this._arrFichas[i];
            if(element.estoyAdentro(x,y)){
                return element;
            }
        }
    }
    
    checkaerEnVertical(x){ //x seria la posicionX que tiene la ultima ficha clieckeada X =COLUMNA

        let cantMismaLinea = 1;
        let columnaSeleccionada = this._matriz[x];
        console.log(columnaSeleccionada);

        for (let i = this.filas; i > 1; i--) {
            if(columnaSeleccionada[i].getFicha() !== null && columnaSeleccionada[i-1].getFicha() !== null ){// si la posicion actual tiene ficha y la siguiente tambien
                if(columnaSeleccionada[i].getJugadorFicha() == columnaSeleccionada[i-1].getJugadorFicha()){// si el jugador que contiene la ficha actual es igual ala ficha siguiente
                    cantMismaLinea++; 
                    if(cantMismaLinea==this.cantLineas){//si la cantidad en la misma linea es igual a al cantidad elegida para jugar
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
    checkearEnHorizontal(y){///y seria la posicionY que tiene la ultima ficha clieckeada Y=FILA
        let cantMismaLinea = 1;//arranco a contar en 1
        for (let i = 1; i < this.columnas; i++) {
            if (this._matriz[i][y].getFicha() !== null && this._matriz[i+1][y].getFicha() !== null) { // si la posicion actual tiene ficha y la siguiente tambien
                if (this._matriz[i][y].getJugadorFicha() == this._matriz[i+1][y].getJugadorFicha()) { // si el jugador que contiene la ficha actual es igual ala ficha siguiente
                    cantMismaLinea ++;//le sumo uno
                    if (cantMismaLinea == this.cantLineas) //si la cantidad en la misma linea es igual a al cantidad elegida para jugar
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
    
    checkPosicionTablero(posX,posY){ // chekeo que la ficha este dentro de los limites tablero
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

