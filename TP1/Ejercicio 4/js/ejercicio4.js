let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

// Create gradient
let grd = ctx.createLinearGradient(0, 50, 0, 200);
grd.addColorStop(0, "black");
grd.addColorStop(1, "#FFFF00");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(50, 50, 400, 150);