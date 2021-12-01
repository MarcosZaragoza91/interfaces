document.addEventListener("DOMContentLoaded",function(){

    let menuHamburg = document.querySelector(".menu-hamburg");
    menuHamburg.className = 'menuHamburg-oculto'

    let btnMenu = document.querySelector(".btn-menuHamburg");
    btnMenu.addEventListener('click', function (){
        if (menuHamburg.className == 'menuHamburg-oculto'){
            menuHamburg.className = 'menu-hamburg-visible';
        }else{
            menuHamburg.className = 'menuHamburg-oculto';
        }
    });
});