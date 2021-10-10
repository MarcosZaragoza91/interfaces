class Ficha{
    constructor(fondo,jugador){
        this.fondo =fondo;
        this.img = new Image();
        this.radio=15;
        this.posicionCanvas = {x:0 , y:0};
        this.posicionMatriz = {x: 0 , y:0};
        //this.posicionCentro = {x: 0 , y:0};
        this.posicionInicial = {x:0 , y:0};
        this.seleccionada = false;
        this.usada = false;
        this.jugador=jugador;
    }

    setPosicionCanvas(posX, posY) { //seteo la posicion en relacion al canvas de la ficha
        /*this.posicionCanvas.x=(posX+1)*100-50;
          this.posicionCanvas.y=(posY+1)*100-50;
          this.posicionCentro.x=(posX+1)*100-50+this.radio;
          this.posicionCentro.y=(posY+1)*100-50+this.radio;
          */
          this.posicionCanvas.x=posX;
          this.posicionCanvas.y=posY;
          //this.posicionCentro.x=posX+this.radio;
          //this.posicionCentro.y=posY+this.radio;
  
      }
/*
    setPosicionCanvas2(posx,posy){
        this.posicionCanvas.x=posx;
        this.posicionCanvas.y=posy;
    }
*/
    setPosicionInicial(posX,posY){ //seteo la posicion inicial de la ficha
        // this.posicionInicial.x=(this.posicionMatriz.x)*100+50;
        // this.posicionInicial.y=(this.posicionMatriz.y)*100+50;
        this.posicionInicial.x=posX;
        this.posicionInicial.y=posY;
     }
    
    setPosicionMatriz(posX, posY){ //seteo la posicon en la ficha de la matriz a
        this.posicionMatriz.x = posX;
        this.posicionMatriz.y = posY;
    }

    getPosicionCanvas(){
        return this.posicionCanvas;
    }

    getPosicionInicial(){
        return this.posicionInicial;
    }
    
    dibujarFicha(ctx){
        if (this.usada || this.seleccionada){ // si la ficha fue usada o seleccionada
            ctx.beginPath();
            ctx.arc(this.posicionCanvas.x,this.posicionCanvas.y , this.radio*2, 0, Math.PI * 2);
                if (this.img.src == "") {//si todavia no tiene fondo
                this.img.src = this.fondo; //le agrego el fondo
                let cargarImg = function () { 
                    ctx.drawImage(this.img, this.posicionCanvas.x-(this.radio*2), this.posicionCanvas.y-(this.radio*2), this.radio * 4, this.radio * 4);
                };
                this.img.onload = cargarImg.bind(this); //cargo la imagen
            } else{//si fue usada y la tiene cargada, solamente dibuja
                ctx.drawImage(this.img, this.posicionCanvas.x-(this.radio*2), this.posicionCanvas.y-(this.radio*2), this.radio * 4, this.radio * 4);
            }
            ctx.closePath();
            ctx.fillStyle = "rgba(255,255,255,0.3)";//cuando este seleccionada se aplica un estilo
            ctx.fill();
        }else{ //sino fue usada
            ctx.beginPath();
            ctx.arc(this.posicionInicial.x,this.posicionInicial.y , this.radio*2, 0, Math.PI * 2);
            if (this.img.src == "") {//si todavia no tiene fondo
                this.img.src = this.fondo;
                let cargarImg = function () {
                    ctx.drawImage(this.img, this.posicionInicial.x-(this.radio*2), this.posicionInicial.y-(this.radio*2) , this.radio * 4, this.radio * 4);
                };
                this.img.onload = cargarImg.bind(this);
            } else{
                ctx.drawImage(this.img, this.posicionInicial.x-(this.radio*2), this.posicionInicial.y-(this.radio*2), this.radio * 4, this.radio * 4);
            }
            ctx.closePath();
            //this.setPosicionCanvas(this.posicionCanvas.x,this.posicionCanvas.y);
        }
    }
 

    estoyAdentro(posX,posY){ //le paso la posiciones del mouse al momento de seleccionar la ficha
        let x = this.posicionCanvas.x-posX; //si la posicion de la ficha menos la posicion al momento de seleccionar es menor al radio-->ESTOY ADENTRO DE LA FICHA 
        let y = this.posicionCanvas.y-posY;
        return Math.sqrt(x*x + y*y)< this.radio;
    }
    
    setSeleccionada(boolean){
        this.seleccionada = boolean;
    }
    setUsada(boolean){
        this.usada=boolean;
    }
    setFondo(fondo){
        this.fondo=fondo;
    }

    getFondo(){
        return this.fondo;
    }

    getSeleccionada(){
        return this.seleccionada;
    }

    getUsada(){
      return this.usada;
    }

    getPosicionCentro(){
        return this.posicionCentro;
    }

    getRadio(){
        return this.radio;
    }

    getImagen(){
        return this.img;
    }

    setJugador(jugador){
        this.jugador = jugador;
    }

    getJugador(){
        return this.jugador;
    }
    getNumJugador(){
        return this.jugador.getTurno();
    }
}
