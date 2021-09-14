"use strict";

    // Esperamos el contenido del elemento de ventana para hacer las operaciones
    window.addEventListener('load', ()=>{

        // Redimensionamos el tamaño del canvas al cargar la Página
        document.addEventListener('mousedown', iniciarDibujo);
        document.addEventListener('mouseup', detenerDibujo);
        document.addEventListener('mousemove', dibujo);
    });

    // Defino el Contexto del Canvas
    let canvas = document.querySelector('#myCanvas');
    let ctx = canvas.getContext('2d');

    // Se define el objeto Lapiz e Imagen
    let puntero = new Lapiz(document.querySelector('#grosorLinea').value);
    let imagen = new Imagen();

    // Se Crea un flag para dibujar o no en el canvas y para el borrado.
    let dibujar = false;
    let borro = false;
    let forma = 'circle';

    //---------------------------------------EVENTOS------------------------------------------------

    // Evento para tomar el boton Lapiz
    document.querySelector('#btn_pencil').addEventListener('click', ()=> {
        puntero.setForma('pencil');
        if (borro){
            puntero.setColor(puntero.getColorauxiliar());
            borro=false;
        }
    });

    // Evento para detectar el lapiz circular
    document.querySelector('#btn_circle').addEventListener('click', ()=> {
        puntero.setForma('circle');
        if (borro){
            puntero.setColor(puntero.getColorauxiliar());
            borro=false;
        }
    })

    //Evento para limpiar el canvas
    document.querySelector('#deleteAll').addEventListener('click', ()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    //Evento para borrar
    document.querySelector('#delete').addEventListener('click', ()=>{
        // Se guarda el color antes de seleccionar el borrado
        puntero.setColorauxiliar(puntero.getColor())
        puntero.setColor('#FFFFFF');
        borro = true;
    });

    //Evento para descargar la imagen del canvas
    let descargar =document.querySelector('#btn_descargar_imagen'); 
    descargar.addEventListener('click', function (e) {
        let dataURL = canvas.toDataURL('image/png');
        descargar.href = dataURL;
    });

    //Evento para la carga de la imagen
    document.querySelector('#imagen').addEventListener('click', function(e){
        imagen.cargarImagen(e);
    })

    //Evento para eliminar todos los filtros de la imagen
    document.querySelector('#original').addEventListener('click', function(){
        //el imagen.getOriginal() trae la imagen seteada originalmente.
        ctx.drawImage(imagen.getOriginal(),0,0);
    })

//------------------------------------------FUNCIONES------------------------------------------------

    // Funcion para setear el color
    function elegirColor(colorElegido){
        puntero.setColor(colorElegido.value);
        borro = false;
    }

    // Funcion para setear el grosor
    function elegirGrosor(grosorElegido){
        puntero.setGrosor(grosorElegido.value);
    }

    // Funcion para obtener la posicion del puntero
    function obtenerPosicion(event){
        // Se resta los Offset para detectar que estamos dentro del canvas
        puntero.setCoordenada(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    }

    // Setea el flag en true y obtengo coordenadas segun evento
    function iniciarDibujo(event){
        dibujar = true;
        obtenerPosicion(event);
    }

    // Seteo el flag en false
    function detenerDibujo(){
        dibujar = false;
    }

    // Funcion para dibujar en el canvas
    function dibujo(event) {
        if (!dibujar) return;
        ctx.beginPath();
        ctx.lineWidth = puntero.getGrosor();

        // Condicion para setear forma al lapiz
        if (puntero.getForma() === forma) {
            ctx.lineCap = 'round';
        }else{
            ctx.lineCap = 'square';
        }

        // Color del trazo del dibujo en el Canvas
        ctx.strokeStyle = puntero.getColor();

        // El cursor para comenzar a dibujar se mueve a esta coordenada
        ctx.moveTo(puntero.getCoordenada().x, puntero.getCoordenada().y);

        // La posición del cursor se actualiza a medida que movemos el mouse alrededor del Canvas
        obtenerPosicion(event);

        // Se traza una línea desde el inicio
        ctx.lineTo(puntero.getCoordenada().x, puntero.getCoordenada().y);

        // Dibujamos las líneas
        ctx.stroke();
    }