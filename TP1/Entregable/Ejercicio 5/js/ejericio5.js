let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

// Create gradient
let grd = ctx.createLinearGradient(0, 50, 0, 200);
grd.addColorStop(0, "black");
grd.addColorStop(1, "yellow");
let grd2 = ctx.createLinearGradient(0,200,0,350)
grd2.addColorStop(0, "yellow");
grd2.addColorStop(1, "red");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(50, 50, 400, 150);
ctx.fillStyle = grd2;
ctx.fillRect(50,200,400,150)
