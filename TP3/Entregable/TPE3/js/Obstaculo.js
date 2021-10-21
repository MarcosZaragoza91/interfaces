class Obstaculo{

    constructor(posicion) {
        this.div = document.querySelector('#obstaculo');
        this.PosInicialX= document.querySelector('#section').offsetWidth;
        this._esPremio = false;
    }
    
    getPosicion() {
        return this._posicion;
    }
    
    moverIzquierda() {
        let aux = this.PosInicialX - 5;
        this.setPosInicialX(aux);
        let value = String(aux) +'px';
        console.log(value);
        this.div.style.left= value;
        console.log(this.div.style);
    
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

    elegirObstaculo(numero){//hacer que se cree un obstaculo u otro cada tanto tiempo
        //mal pensado llevarlo bien a a objetos
        if(numero == 1){
            let obstaculoM = document.querySelector('#obstaculo');
            obstaculoM.className = 'obstaculoMurg';
        }else{
            let obstaculoS = document.querySelector('#obstaculo');
            obstaculoS.className = 'obstaculoSerp';
        }
        

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