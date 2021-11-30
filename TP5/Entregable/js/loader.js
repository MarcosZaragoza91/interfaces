document.addEventListener("DOMContentLoaded",function(){
    
    window.onload = function () {

        function loaderStyle () {
            let contenedorLoader = document.querySelector(".contenedor-loader");  
            contenedorLoader.style.visibility= "hidden";
            contenedorLoader.style.opacity='0';
        }
        setTimeout(loaderStyle, 1000);
    }
       
});