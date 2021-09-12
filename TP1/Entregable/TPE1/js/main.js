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

    // Se define el objeto Lapiz
    let puntero = new Lapiz();
    let imagen = new Imagen();

    // Se Crea un flag para dibujar o no en el canvas
    let dibujar = false;
    let borro = false;


    document.querySelector('#btn_pencil').addEventListener('click', ()=> {
        puntero.setForma('pencil');
        if (borro){
            puntero.setColor(puntero.getColorauxiliar());
            borro=false;
        }
    });

    document.querySelector('#btn_circle').addEventListener('click', ()=> {
        puntero.setForma('circle');
        if (borro){
            puntero.setColor(puntero.getColorauxiliar());
            borro=false;
        }
    })

	function elegirColor(colorElegido){//pasar a seleccion por queryselector sino funciona
        puntero.setColor(colorElegido.value);
        borro = false;
    }

	function elegirGrosor(grosorElegido){
        puntero.setGrosor(grosorElegido.value);
	}

    document.querySelector('#deleteAll').addEventListener('click', ()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    document.querySelector('#delete').addEventListener('click', ()=>{
        puntero.setColorauxiliar(puntero.getColor())
        puntero.setColor('#FFFFFF');
        borro = true;
    });

    let descargar =document.querySelector('#btn_descargar_imagen'); 
    descargar.addEventListener('click', function (e) {
        let dataURL = canvas.toDataURL('image/png');
        descargar.href = dataURL;
    });

    document.querySelector('#imagen').addEventListener('click', function(e){
        imagen.cargarImagen(e);
    })

    document.querySelector('#original').addEventListener('click', function(){
        ctx.drawImage(imagen.getOriginal(),0,0);
    })

//------------------------------------------FUNCIONES------------------------------------------------

    function obtenerPosicion(event){
        puntero.setCoordenada(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        // coordenadas.x = event.clientX;
        // coordenadas.y = event.clientY;
    }

    function iniciarDibujo(event){
        dibujar = true;
        obtenerPosicion(event);
    }

    function detenerDibujo(){
        dibujar = false;
    }

    function dibujo(event) {
        if (!dibujar) return;
        ctx.beginPath();
        ctx.lineWidth = puntero.getGrosor();

        // Trazo redondeado
        if (puntero.getForma() === 'circle') {
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