document.addEventListener("DOMContentLoaded",function(){

    let mensajes = document.querySelector(".mensajes");
    mensajes.className = 'container-msj-oculto'

    let btnMjsRecibido = document.querySelector(".btn-msj-recibidos");
    btnMjsRecibido.addEventListener('click', function (){
        if (mensajes.className == 'container-msj-oculto'){
            mensajes.className = 'container-msj';
        }else{
            mensajes.className = 'container-msj-oculto';
        }
    });

    if(mensajes.className == 'container-msj mensajes'){
        let btnCerrarMsj = document.querySelector(".icon-cerrar-msj");
        btnCerrarMsj.addEventListener('click', function (){
            mensajes.className = 'container-msj-oculto';
        });
    }


    //Solucionar este tema (No funciona)
    let btnCamara = document.querySelector(".camara");
    if (btnCamara.className == 'videollamada-oculto camara'){
        btnCamara.addEventListener('click', function(){
            if (btnCamara.className == 'videollamada-oculto'){
                btnCamara.className = 'container-videollamada';
            }else{
                btnCamara.className = 'videollamada-oculto';
            }
        });
    }
});