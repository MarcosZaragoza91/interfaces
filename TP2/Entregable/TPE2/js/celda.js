class Casillero{
    constructor(){
        this.posicionCasillero= {
            x:0,
            y:0
        };
        this.ficha=false;
    }

    setFicha(boolean){
        this.ficha=boolean;
    }
    getFicha(){
        return this.ficha;
    }

    setPosicionesCasillero(x,y){
        this.posicionCasillero.x=x;
        this.posicionCasillero.y=y;
    }

    getPosicionesCelda(){
        return this.posicionCasillero;
    }
}