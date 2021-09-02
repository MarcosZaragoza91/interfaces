let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

// Create gradient
let grd = ctx.createLinearGradient(0, 0, 0, 100);
grd.addColorStop(0, "black");
grd.addColorStop(1, "#005555");
let grd2 = ctx.createLinearGradient(0,100,0,200)
grd2.addColorStop(0, "#005555");
grd2.addColorStop(1, "#009999");
let grd3 = ctx.createLinearGradient(0,200,0,300)
grd3.addColorStop(0, "#009999");
grd3.addColorStop(1, "#00FFFF");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(50, 0, 400, 100);
ctx.fillStyle = grd2;
ctx.fillRect(50,100,400,100);
ctx.fillStyle = grd3;
ctx.fillRect(50,200,400,100);