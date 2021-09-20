DomConte

let juego1 = new Juego();
document.querySelector('#btn_circle').addEventListener('click', ()=>{
    let tablero1 = new Tablero();
    tablero1.dibujarTablero();
});

document.querySelector('#btn_fichas').addEventListener('click', ()=>{
    //let juego1 = new Juego();
    juego1.cargarFichas();
});

