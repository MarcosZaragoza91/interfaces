class Obstaculo{

    constructor(clase) {
        this.div = document.createElement("div");
        this.class = this.div.className=clase;
        this.PosInicialX= document.querySelector('.container').offsetWidth;
        document.querySelector('.container').appendChild(this.div);
        this._esPremio = false;
    }

    //Funcion para obtener la posicion en X del obstaculo
    getPosicion() {
        return this.PosInicialX;
    }

    //Funcion que nos retorna la clase del obtaculo
    getClass(){
        return this.class;
    }

    //Funcion que realiza el desplazamiento en X del obstaculo/premio
    moverIzquierda() {
        let aux = this.PosInicialX - 10;
        this.setPosInicialX(aux);
        let value = String(aux) +'px';
        this.div.style.left= value; 
    }

    //Funcion para setear la posicion de inicio del obstaculo/premio
    setPosInicialX(value){
        this.PosInicialX=value;
    }

    //Funcion para saber si el obstaculo es un premio, para luego adoptar el diferente comportamiento
    getEsPremio() {
        return this._esPremio;
    }

    //Funcion para setear al obstaculo, que es un premio.
    setEsPremio(value) {
        this._esPremio = value;
    }
    
}