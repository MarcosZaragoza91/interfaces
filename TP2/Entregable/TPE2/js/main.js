window.addEventListener('load', function (){

    let fondofichaj1='';
    let fondofichaj2='';

    //------------------------------------SELECCION FICHA JUGADOR 1 y 2----------------------------------------
    //cuando selecciono el tipo de ficha q quiero  le paso el link de la imagen al parametro fondo de la ficha
    //En caso de tener seleccionada una ficha, no permite volver a elegir y oculta la seleccion del otro jugador

        document.querySelector('.fondoj1red').addEventListener('click', function (){
            if(fondofichaj1 == ''){
                fondofichaj1 = "images/redCoin.png";
                document.querySelector('.fondoj1red').className = 'fichaElegida';
                document.querySelector('.fondoj2red').className='hidden';
            }    
        })
        document.querySelector('.fondoj1blue').addEventListener('click', function (){
            if(fondofichaj1 == ''){
                fondofichaj1 = "images/blueCoin.png";
                document.querySelector('.fondoj1blue').className = 'fichaElegida'; //le agrego estilo ala ficha elegida
                document.querySelector('.fondoj2blue').className='hidden'; //oculto la ficha al otro jugador
            }    
        })
        document.querySelector('.fondoj1green').addEventListener('click', function (){
            if(fondofichaj1 == ''){
                fondofichaj1 = "images/greenCoin.png";
                document.querySelector('.fondoj1green').className = 'fichaElegida';
                document.querySelector('.fondoj2green').className='hidden';
            }    
        })
        document.querySelector('.fondoj1brown').addEventListener('click', function (){
            if(fondofichaj1 == ''){
                fondofichaj1 = "images/brownCoin.png";
                document.querySelector('.fondoj1brown').className = 'fichaElegida';
                document.querySelector('.fondoj2brown').className='hidden';
            }    
        })
        document.querySelector('.fondoj1grey').addEventListener('click', function (){
            if(fondofichaj1 == ''){
                fondofichaj1 = "images/greyCoin.png";
                document.querySelector('.fondoj1grey').className = 'fichaElegida';
                document.querySelector('.fondoj2grey').className='hidden';
            }
        })
            
        document.querySelector('.fondoj2red').addEventListener('click', function (){
            if(fondofichaj2 == ''){
                fondofichaj2 = "images/redCoin.png";
                document.querySelector('.fondoj2red').className = 'fichaElegida';
                document.querySelector('.fondoj1red').className='hidden';
            }
        })
        document.querySelector('.fondoj2blue').addEventListener('click', function (){
            if(fondofichaj2 == ''){
                fondofichaj2 = "images/blueCoin.png";
                document.querySelector('.fondoj2blue').className = 'fichaElegida';
                document.querySelector('.fondoj1blue').className='hidden';
            }    
        })
        document.querySelector('.fondoj2green').addEventListener('click', function (){
            if(fondofichaj2 == ''){
                fondofichaj2 = "images/greenCoin.png";
                document.querySelector('.fondoj2green').className = 'fichaElegida';
                document.querySelector('.fondoj1green').className='hidden';
            }    
        })
        document.querySelector('.fondoj2brown').addEventListener('click', function (){
            if(fondofichaj2 == ''){
                fondofichaj2 = "images/brownCoin.png";
                document.querySelector('.fondoj2brown').className = 'fichaElegida';
                document.querySelector('.fondoj1brown').className='hidden';
            }    
        })
        document.querySelector('.fondoj2grey').addEventListener('click', function (){
            if(fondofichaj2 == ''){
                fondofichaj2 = "images/greyCoin.png";
                document.querySelector('.fondoj2grey').className = 'fichaElegida';
                document.querySelector('.fondoj1grey').className='hidden';
            }    
        })
    


    document.querySelector('#btn_load_game').addEventListener('click', ()=>{ //INICIO DEL JUEGO
        
    document.querySelector('.close').addEventListener('click', function (){
        //Ocultar el modal al precionar "CERRAR"
        document.querySelector('.modal').classList.remove("modal-visible");
        document.querySelector('.modal').classList.add("modal-oculto");
    })
    
    if (fondofichaj1 != '' && fondofichaj2 != '') { // SI LAS FICHAS TIENEN FONDO COMIENZA LA LOGICA DEL JUEGO
        document.querySelector(".show").className = "hidden"; //muestro el boton reiniciar
        document.querySelector(".hidden2").className = "show";//oculto el boton comenzar juego
        document.querySelector("#myProgress").className=" "; //muestro al barra de tiempo 

        //Tomo el canvas y le defino el contexto
        let canvas = document.querySelector('#myCanvas');
        ctx = canvas.getContext('2d');
        let cantidadLineas = document.querySelector("#cantLineas").value; //cantidad de lineas modo de juego
        //Inicializamos las variables
        let columnas = 0;
        let filas = 0;
        //segun el modo de juego elegido sera el tamanio del tablero 
        if (cantidadLineas == 4) {  
            columnas = 7;
            filas = 6;
            canvas.width = 1400;
            canvas.height = 700;
        } else if (cantidadLineas == 5) {
            columnas = 8;
            filas = 7;
            canvas.width = 1400;
            canvas.height = 800;
        } else if (cantidadLineas == 6) {
            columnas = 8;
            filas = 7;
            canvas.width = 1400;
            canvas.height = 800;
        }
        //Definimos un nuevo Juego, instanciando la clase Juego.
        let juego = new Juego(canvas, cantidadLineas, columnas, filas, fondofichaj1, fondofichaj2);
        juego.tablero.limpiarCanvas();
        let time = true;
        //Determinamos el timer con el llamado de la funcion
        tiempo();
        //Comienza la logica del juego, donde dibuja tablero, fichas y define las funciones del juego
        juego.nuevoJuego();

    function onMouseDown(e){
        //Chequeamos que estemos dentro del tiempo limite del juego
        if (time){
            juego.onMouseDown(e)
        }
    }
    
    function onMouseMove(e){
        //Chequeamos que estemos dentro del tiempo limite del juego
        if (time){
            juego.onMouseMove(e)
        }
    }
    function onMouseUp(e){
        //Chequeamos que estemos dentro del tiempo limite del juego
        if (time){
            juego.onMouseUp(e)
        }
    }

    //Definimos esta funcion para cuando salimos del canvas devuelve la ficha a su posicion inicial, si estamos dentro del tiempo limite y no hay ganadores.
    function onMouseLeave(e){
        juego.isMouseDown = false;
        if((juego.ultimaFichaClickeada != null && juego.ultimaFichaClickeada.getSeleccionada() && juego.ganador == 0) || time){
            juego.ultimaFichaClickeada.setSeleccionada(false);
            juego.ultimaFichaClickeada.setPosicionCanvas(juego.ultimaFichaClickeada.getPosicionInicial().x,juego.ultimaFichaClickeada.getPosicionInicial().y);
            juego.tablero.dibujarTablero();
        }
    }

    //Funcion que maneja el timer del juego, al terminal el Intervalo de tiempo nos devuelve un modal indicando que se termino el juego y no nos permite interactuar
    function tiempo(){
        let elem = document.getElementById("countdown");
        let width = 0;
        let id = setInterval(frame, 2000);
        function frame() {
            if (width == 100 || juego.ganador != 0) {
                clearInterval(id);
                time = false;
                juego.tablero.dibujarTableroFinal(juego.ganador);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }

    //Eventos de escucha del canvas
    canvas.addEventListener('mousedown',onMouseDown);
    canvas.addEventListener('mouseup',onMouseUp);
    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave)
}else{
        //Modal que indica que el jugador debe seleccionar las fichas para comenzar el juego
        let modal = document.querySelector(".modal");
        document.querySelector('#modal-txt').innerHTML = "CADA JUGADOR DEBERA ELEGIR UNA FICHA";
        modal.classList.remove("modal-oculto");
        modal.classList.add("modal-visible");
    }
})

});





