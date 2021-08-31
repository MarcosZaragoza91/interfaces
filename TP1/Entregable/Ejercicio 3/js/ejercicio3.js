let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let imgData = ctx.createImageData(200, 100);

let i;
for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i+0] = 0;
    imgData.data[i+1] = 255;
    imgData.data[i+2] = 255;
    imgData.data[i+3] = 255;
}

ctx.putImageData(imgData, 30, 30);