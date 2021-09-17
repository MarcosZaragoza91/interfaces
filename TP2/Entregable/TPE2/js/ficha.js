class Ficha{
    constructor(color){
        this.color;
        this.imagen = newImage();
        this.radio;
        this.posicion = {x: 0 , y:0}
        this.seleccionada = false;
        this.usada = false;
    }

    getColor(){
        return this.color;
    }    

    esSeleccionada(){
        return this.seleccionada;
    }
    fueUsada(){
      return this.fueUsada;  
    }
    getPosicion(){
        return this.posicion;
    }

    setPosicion(x,y){
        this.posicion =(x ,y);
    }
    dibujarFicha(){

    }

    setSeleccionada(boolean){
        this.seleccionada = boolean;
    }
    setUsada(boolean){
        this.usada=boolean;
    }
    


}