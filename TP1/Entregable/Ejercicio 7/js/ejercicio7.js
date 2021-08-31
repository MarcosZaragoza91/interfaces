let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let image = new Image();
image.src = "./image/cilindro.jpg";
ctx.drawImage(image, 10, 10);