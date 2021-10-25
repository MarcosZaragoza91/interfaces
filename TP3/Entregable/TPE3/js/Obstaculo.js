class Obstaculo{

    constructor(clase) {
        this.div = document.createElement("div");
        this.class = this.div.className=clase;
        this.PosInicialX= document.querySelector('.container').offsetWidth;
        document.querySelector('.container').appendChild(this.div);
        this._esPremio = false;
    }
    
    matePersonaje(x,y){
        
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
        //this.div.style.left=value; 
    }

    getPosInicialX(){
        return this.PosInicialX;
    }

    setPosInicialX(value){
        this.PosInicialX=value;
    }

    posCentro(){
        let x = this._posicion.left + (this._posicion.width/2);
        let y = this._posicion.top + (this._posicion.height/2);
    }

    getEsPremio() {
        return this._esPremio;
    }

    setEsPremio(value) {
        this._esPremio = value;
    }

    crearPremio(){

    }
/*
    avanzar(){
        //mal pensado llevarlo bien a a objetos
        let obstaculoS = document.querySelector('#obstaculoSerp');
        obstaculoS.className='obstaculoSerpConMovimiento';
        setInterval(function(){ 
            obstaculoS.className='obstaculoSerpConMovimiento';
                setTimeout(() => {
                    obstaculoS.className= 'obstaculoSerp';            
                }, 20000); 
            }, 21000);
            
    }
*/
    dibujarPremio() {
        setInterval()    
    }
    
}