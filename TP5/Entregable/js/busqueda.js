document.addEventListener("DOMContentLoaded",function(){
    
    let modalBusqueda = document.querySelector(".modal-busqueda-js");
    modalBusqueda.className = 'modal-busqueda-invisible';

    let inputBuscador = document.querySelector(".buscador");
    inputBuscador.addEventListener('click', function (){
        if (modalBusqueda.className == 'modal-busqueda-invisible'){
            modalBusqueda.className = 'modal-busqueda-nav';
        }else{
            modalBusqueda.className = 'modal-busqueda-invisible';
        }
    });
});