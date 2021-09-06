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






    //----------------------------------------FILTROS--------------------------------------------------git s

document.querySelector('#filter_red').addEventListener('click',function(){
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let pixels = imageData.data;
    let numPixels = imageData.width * imageData.height;

    for ( let i = 0; i < numPixels; i++ ) {
        let r = pixels[ i * 4 ];
        let g = pixels[ i * 4 + 1 ];
        let b = pixels[ i * 4 + 2 ];

        pixels[ i * 4 ] = r;
        pixels[ i * 4 + 1 ] = 0;
        pixels[ i * 4 + 2 ] = 0;
    }

    ctx.putImageData( imageData, 0, 0 );
})

document.querySelector('#filter_green').addEventListener('click',function(){
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let pixels = imageData.data;
    let numPixels = imageData.width * imageData.height;

    for ( let i = 0; i < numPixels; i++ ) {
        let r = pixels[ i * 4 ];
        let g = pixels[ i * 4 + 1 ];
        let b = pixels[ i * 4 + 2 ];

        pixels[ i * 4 ] = 0;
        pixels[ i * 4 + 1 ] = g;
        pixels[ i * 4 + 2 ] = 0;
    }

    ctx.putImageData( imageData, 0, 0 );
})

document.querySelector('#filter_blue').addEventListener('click',function(){
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let pixels = imageData.data;
    let numPixels = imageData.width * imageData.height;

    for ( let i = 0; i < numPixels; i++ ) {
        let r = pixels[ i * 4 ];
        let g = pixels[ i * 4 + 1 ];
        let b = pixels[ i * 4 + 2 ];

        pixels[ i * 4 ] = 0;
        pixels[ i * 4 + 1 ] = 0;
        pixels[ i * 4 + 2 ] = b;
    }

    ctx.putImageData( imageData, 0, 0 );
})


document.querySelector('#filter_binario').addEventListener('click',function(){
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let pixels = imageData.data;
    let numPixels = imageData.width * imageData.height;

    for ( let i = 0; i < numPixels; i++ ) {
        let r = pixels[ i * 4 ];
        let g = pixels[ i * 4 + 1 ];
        let b = pixels[ i * 4 + 2 ];

        let grey = ( r + g + b ) / 3;

        pixels[ i * 4 ] = grey;
        pixels[ i * 4 + 1 ] = grey;
        pixels[ i * 4 + 2 ] = grey;
    }

    ctx.putImageData( imageData, 0, 0 );
})

document.querySelector('#filter_invert').addEventListener('click',function(){
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let pixels = imageData.data;
    let numPixels = imageData.width * imageData.height;

    for ( let i = 0; i < numPixels; i++ ) {
        let r = pixels[ i * 4 ];
        let g = pixels[ i * 4 + 1 ];
        let b = pixels[ i * 4 + 2 ];

        pixels[ i * 4 ] = 255 - r;
        pixels[ i * 4 + 1 ] = 255 - g;
        pixels[ i * 4 + 2 ] = 255 - b;
    }

    ctx.putImageData( imageData, 0, 0 );
})

document.querySelector('#filter_sephia').addEventListener('click', function(){
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let pixels = imageData.data;
    let numPixels = imageData.width * imageData.height;

    for ( let i = 0; i < numPixels; i++ ) {
        let r = pixels[ i * 4 ];
        let g = pixels[ i * 4 + 1 ];
        let b = pixels[ i * 4 + 2 ];

        pixels[ i * 4 ] = 255 - r;
        pixels[ i * 4 + 1 ] = 255 - g;
        pixels[ i * 4 + 2 ] = 255 - b;

        pixels[ i * 4 ] = ( r * .393 ) + ( g *.769 ) + ( b * .189 );
        pixels[ i * 4 + 1 ] = ( r * .349 ) + ( g *.686 ) + ( b * .168 );
        pixels[ i * 4 + 2 ] = ( r * .272 ) + ( g *.534 ) + ( b * .131 );
    }

    ctx.putImageData( imageData, 0, 0 );
})

document.querySelector('#filter_contrast').addEventListener('click',function (){
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let pixels = imageData.data;
    let numPixels = imageData.width * imageData.height;

    let contrast = puntero.getGrosor();//Lo toma del rango del grosor, esto se debe reformar por uno propio
    let factor = ( 259 * ( contrast + 255 ) ) / ( 255 * ( 259 - contrast ) );

    for ( let i = 0; i < numPixels; i++ ) {
        let r = pixels[ i * 4 ];
        let g = pixels[ i * 4 + 1 ];
        let b = pixels[ i * 4 + 2 ];

        pixels[ i * 4 ] = 255 - r;
        pixels[ i * 4 + 1 ] = 255 - g;
        pixels[ i * 4 + 2 ] = 255 - b;

        pixels[ i * 4 ] = factor * ( r - 128 ) + 128;
        pixels[ i * 4 + 1 ] = factor * ( g - 128 ) + 128;
        pixels[ i * 4 + 2 ] = factor * ( b - 128 ) + 128;
    }

    ctx.putImageData( imageData, 0, 0 );
})

