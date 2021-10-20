class Obstaculo{

    constructor(posicion) {
        this.div = document.querySelector('#obstaculo');
        this._esPremio = false;
        this._posicion = this.div.getBoundingClientRect();
    }

    getPosicion() {
        return this._posicion;
    }

    setPosicionDiv(value) {
        //this._posicion.left = this._posicion.left - value;
        this.div.setAttribute("left",this._posicion.left - value);
        //this.div.style.left = this._posicion.left - value;
        console.log(this._posicion);
        console.log(this.div);
        //console.log(this.div.style);
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

    crearObstaculo(contenedorObstaculo){//hacer que se cree un obstaculo u otro cada tanto tiempo
        //mal pensado llevarlo bien a a objetos
        let obstaculoM = document.querySelector('#obstaculoMurg');
        obstaculoM.className = 'obstaculoMurg';

        let obstaculoS = document.querySelector('#obstaculoSerp');
        obstaculoS.className = 'obstaculoSerp';
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