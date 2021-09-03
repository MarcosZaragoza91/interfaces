class Lapiz {
    constructor() {
        this.coordenadas = {x:0,y:0};
        this._oolorauxiliar= '#000000';
        this._color = '#000000';
        this._forma = 'circle';
        this._grosor = 5;
    }

    getColor() {
        return this._color;
    }

    setColor(value) {
        this._color = value;
    }

    getForma() {
        return this._forma;
    }

    setForma(value) {
        this._forma = value;
    }

    getGrosor() {
        return this._grosor;
    }

    setGrosor(value) {
        this._grosor = value;
    }

    getCoordenada(){
        return this.coordenadas;
    }

    setCoordenada(x,y){
        this.coordenadas.x = x;
        this.coordenadas.y = y;
    }

    getColorauxiliar() {
        return this._oolorauxiliar;
    }

    setColorauxiliar(value) {
        this._oolorauxiliar = value;
    }
}
