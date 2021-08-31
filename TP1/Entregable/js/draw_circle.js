let c = document.querySelector('#myCanvas');
let ctx = c.getContext("2d");


// for (let i = 0; i < 20; i++) {
//     ctx.fillStyle = getRGBA();
//     ctx.beginPath();
//     ctx.arc(Math.round(Math.random()* c.width), Math.round(Math.random()* c.height), Math.round(Math.random()* 20), 0, 2 * Math.PI);
//     ctx.fill();
//     ctx.closePath();
// }
//
//
// function getRGBA(){
//     r = Math.random() * 255;
//     g = Math.random() * 255;
//     b = Math.random() * 255;
//     a = 255;
//     rgba = (r,g,b,a);
//     console.log(rgba);
//     return rgba;
// }


for (let i = 0; i < 10; i++) {
    x = 100 - 10 * i;
    y = 100 + 10 * i;
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    if i = 1 {
        ctx.fillStyle = '#ff1122';
    }
    else
        if (i = 2) {
        ctx.fillStyle = '#1123f2';
        }

    else
        if (i = 3) {
            ctx.fillStyle = '#11ff22';
        }
    ctx.fillRect(x, y, 30+(10*i), 10);
    ctx.fillRect(100, y, 30+(10*i), 10);
    ctx.fill();
    ctx.closePath();
}