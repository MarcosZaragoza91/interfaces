let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let image = new Image();
image.src = "./image/cilindro.jpg";


document.querySelector('#btn_load').addEventListener('click', function (){
    ctx.drawImage(image, 0, 0);
});

// document.querySelector('#btn_clear').addEventListener('click', function (){
//     ctx.clearRect(0, 0, ctx.width, ctx.height);
// });


