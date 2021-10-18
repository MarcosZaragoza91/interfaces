class Obstaculo{

    constructor(posicion) {
        this.posicion = posicion;
        this._esPremio = false;
    }

    posCentro(){
        let x = this.posicion.left + (this.posicion.width/2);
        let y = this.posicion.top + (this.posicion.height/2);
    }

    getEsPremio() {
        return this._esPremio;
    }

    setEsPremio(value) {
        this._esPremio = value;
    }

    crearObstaculo(){//crear que se cree un obstaculo u otro cada tanto tiempo
        let obstaculoM = document.querySelector('#obstaculoMurg');
        obstaculoM.className = 'obstaculoMurg';

        let obstaculoS = document.querySelector('#obstaculoSerp');
        obstaculoS.className = 'obstaculoSerp';
    }

    crearPremio(){

    }

    dibujarPremio() {
        setInterval()    
    }
    
}