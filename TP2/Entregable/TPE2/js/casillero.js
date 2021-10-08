class Casillero{
    constructor(){
        this.posicionCasillero= {
            x:0,
            y:0
        };
        this.posicionCanvas ={
            x:0,
            y:0
        };
        this.width = 100;
        this.heigth = 100;
        this.ficha= null;
        this._tirada = false;
    }

    getTirada() {
        return this._tirada;
    }

    setTirada(value) {
        this._tirada = value;
    }

    getHeigth(){
        return this.heigth;
    }
    getWidth(){
        return this.width;
    }
    setFicha(ficha){
        this.ficha=ficha;
    }
    getFicha(){
        return this.ficha;
    }
    setPosicionCanvas (x,y){
        this.posicionCanvas.x=x;
        this.posicionCanvas.y=y; 
    }

    setPosicionesCasillero(x,y){
        this.posicionCasillero.x=x;
        this.posicionCasillero.y=y;
    }

    getPosicionesCanvas(){
        return this.posicionCanvas;
    }
    getPosicionesCasillero(){
        return this.posicionCasillero;
    }

    getJugadorFicha(){
        return this.ficha.getNumJugador();
    }
}