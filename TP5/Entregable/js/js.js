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


    let btnCamara = document.querySelector(".cam-conver");
    if (btnCamara!= null){
        btnCamara.addEventListener('click', modalCamara);
    }

    let btnTelefono = document.querySelector(".telefono-call");
    if (btnTelefono != null){
        btnTelefono.addEventListener('click',modalCamara);
    }

    function modalCamara(){
        let modalCamara = document.querySelector(".camara");
        if (modalCamara.className == 'videollamada-oculto camara'){
            modalCamara.className = 'container-videollamada camara';
        }else{
            modalCamara.className = 'videollamada-oculto camara';
        }
    }
});