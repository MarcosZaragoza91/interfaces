let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let w = Math.random()*150;
let h = Math.random()*5;
ctx.fillStyle = "#00FFFF";
ctx.fillRect(Math.random()*(canvas.width - w), Math.random()*(canvas.height - h), w, h);
