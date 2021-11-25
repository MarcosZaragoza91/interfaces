document.addEventListener("DOMContentLoaded",function(){
/*
    let mensajes = document.querySelector(".mensajes");
    
    let btnMjsRecibido = document.querySelector(".btn-msj-recibidos");
    btnMjsRecibido.addEventListener('click', function (){ 
        mensajes.classList.remove("container-msj-oculto");
        mensajes.classList.add("container-msj");
    });
*/
let mensajes = document.querySelector(".mensajes");
    let btnCerrarMsj = document.querySelector(".icon-cerrar-msj");
    
    btnCerrarMsj.addEventListener('click', function (){ 
        mensajes.classList.remove("container-msj");
        mensajes.classList.add("container-msj-oculto");
    });

});