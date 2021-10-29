class Obstaculo{

    constructor(clase) {
        this.div = document.createElement("div");
        this.class = this.div.className=clase;
        this.PosInicialX= document.querySelector('.container').offsetWidth;
        document.querySelector('.container').appendChild(this.div);
        this._esPremio = false;
    }
    
    getPosicion() {
        return this.PosInicialX;
    }

    getDiv(){
        return this.div;
    }
    setClass(clase){
        this.div.className=clase;
    }
    getClass(){
        return this.class;
    }
    
    moverIzquierda() {
        let aux = this.PosInicialX - 10;
        this.setPosInicialX(aux);
        let value = String(aux) +'px';
        this.div.style.left= value; 
    }

    getPosInicialX(){
        return this.PosInicialX;
    }

    setPosInicialX(value){
        this.PosInicialX=value;
    }

    getEsPremio() {
        return this._esPremio;
    }

    setEsPremio(value) {
        this._esPremio = value;
    }
    
}