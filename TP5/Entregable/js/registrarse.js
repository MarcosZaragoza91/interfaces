
document.addEventListener("DOMContentLoaded",function(){
    let modal = document.querySelector(".modal");  
       
    let btn = document.querySelector(".btn-submit-2");
    
    btn.addEventListener('click', function (){
        if (modal.className == 'modal-oculto modal'){
            modal.className = 'modal-registrarse';
        }else{
            modal.className = 'modal-oculto modal';
        }
    });

});