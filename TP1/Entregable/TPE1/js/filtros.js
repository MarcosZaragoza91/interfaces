//----------------------------------------FILTROS--------------------------------------------------

document.querySelector('#filter_red').addEventListener('click',function(){
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let pixels = imageData.data;
    let numPixels = imageData.width * imageData.height;

    for ( let i = 0; i < numPixels; i++ ) {
        let r = pixels[ i * 4 ];
        let g = pixels[ i * 4 + 1 ];
        let b = pixels[ i * 4 + 2 ];

        pixels[ i * 4 ] = r;
        pixels[ i * 4 + 1 ] = 0;
        pixels[ i * 4 + 2 ] = 0;
    }

    ctx.putImageData( imageData, 0, 0 );
})

document.querySelector('#filter_green').addEventListener('click',function(){
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let pixels = imageData.data;
    let numPixels = imageData.width * imageData.height;

    for ( let i = 0; i < numPixels; i++ ) {
        let r = pixels[ i * 4 ];
        let g = pixels[ i * 4 + 1 ];
        let b = pixels[ i * 4 + 2 ];

        pixels[ i * 4 ] = 0;
        pixels[ i * 4 + 1 ] = g;
        pixels[ i * 4 + 2 ] = 0;
    }

    ctx.putImageData( imageData, 0, 0 );
})

document.querySelector('#filter_blue').addEventListener('click',function(){
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let pixels = imageData.data;
    let numPixels = imageData.width * imageData.height;

    for ( let i = 0; i < numPixels; i++ ) {
        let r = pixels[ i * 4 ];
        let g = pixels[ i * 4 + 1 ];
        let b = pixels[ i * 4 + 2 ];

        pixels[ i * 4 ] = 0;
        pixels[ i * 4 + 1 ] = 0;
        pixels[ i * 4 + 2 ] = b;
    }

    ctx.putImageData( imageData, 0, 0 );
})


document.querySelector('#filter_binario').addEventListener('click',function(){
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let pixels = imageData.data;
    let numPixels = imageData.width * imageData.height;

    for ( let i = 0; i < numPixels; i++ ) {
        let r = pixels[ i * 4 ];
        let g = pixels[ i * 4 + 1 ];
        let b = pixels[ i * 4 + 2 ];

        let grey = ( r + g + b ) / 3;

        pixels[ i * 4 ] = grey;
        pixels[ i * 4 + 1 ] = grey;
        pixels[ i * 4 + 2 ] = grey;
    }

    ctx.putImageData( imageData, 0, 0 );
})

document.querySelector('#filter_invert').addEventListener('click',function(){
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let pixels = imageData.data;
    let numPixels = imageData.width * imageData.height;

    for ( let i = 0; i < numPixels; i++ ) {
        let r = pixels[ i * 4 ];
        let g = pixels[ i * 4 + 1 ];
        let b = pixels[ i * 4 + 2 ];

        pixels[ i * 4 ] = 255 - r;
        pixels[ i * 4 + 1 ] = 255 - g;
        pixels[ i * 4 + 2 ] = 255 - b;
    }

    ctx.putImageData( imageData, 0, 0 );
})

document.querySelector('#filter_sephia').addEventListener('click', function(){
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let pixels = imageData.data;
    let numPixels = imageData.width * imageData.height;

    for ( let i = 0; i < numPixels; i++ ) {
        let r = pixels[ i * 4 ];
        let g = pixels[ i * 4 + 1 ];
        let b = pixels[ i * 4 + 2 ];

        pixels[ i * 4 ] = 255 - r;
        pixels[ i * 4 + 1 ] = 255 - g;
        pixels[ i * 4 + 2 ] = 255 - b;

        pixels[ i * 4 ] = ( r * .393 ) + ( g *.769 ) + ( b * .189 );
        pixels[ i * 4 + 1 ] = ( r * .349 ) + ( g *.686 ) + ( b * .168 );
        pixels[ i * 4 + 2 ] = ( r * .272 ) + ( g *.534 ) + ( b * .131 );
    }

    ctx.putImageData( imageData, 0, 0 );
})

document.querySelector('#filter_contrast').addEventListener('click',function (){
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let pixels = imageData.data;
    let numPixels = imageData.width * imageData.height;

    let contrast = 10;
    let factor = ( 259 * ( contrast + 255 ) ) / ( 255 * ( 259 - contrast ) );

    for ( let i = 0; i < numPixels; i++ ) {

        let r = pixels[ i * 4 ];
        let g = pixels[ i * 4 + 1 ];
        let b = pixels[ i * 4 + 2 ];

        pixels[ i * 4 ] = 255 - r;
        pixels[ i * 4 + 1 ] = 255 - g;
        pixels[ i * 4 + 2 ] = 255 - b;

        pixels[ i * 4 ] = factor * ( r - 128 ) + 128;
        pixels[ i * 4 + 1 ] = factor * ( g - 128 ) + 128;
        pixels[ i * 4 + 2 ] = factor * ( b - 128 ) + 128;
    }

    ctx.putImageData( imageData, 0, 0 );
})

//------------------------------------Brillo/Saturacion--------------------------------------

//CONVIERTO DE RGB A HSV
function rgb_to_hsv(r , g , b) { ///esta es la q anda

    // R, G, B values are divided by 255
    // to change the range from 0..255 to 0..1
    r = r / 255.0;
    g = g / 255.0;
    b = b / 255.0;

    // h, s, v = hue, saturation, value
    var cmax = Math.max(r, Math.max(g, b)); // maximum of r, g, b
    var cmin = Math.min(r, Math.min(g, b)); // minimum of r, g, b
    var diff = cmax - cmin; // diff of cmax and cmin.
    var h = -1, s = -1;

    // if cmax and cmax are equal then h = 0
    if (cmax == cmin)
        h = 0;

    // if cmax equal r then compute h
    else if (cmax == r)
        h = (60 * ((g - b) / diff) + 360) % 360;

    // if cmax equal g then compute h
    else if (cmax == g)
        h = (60 * ((b - r) / diff) + 120) % 360;

    // if cmax equal b then compute h
    else if (cmax == b)
        h = (60 * ((r - g) / diff) + 240) % 360;

    // if cmax equal zero
    if (cmax == 0)
        s = 0;
    else
        s = (diff / cmax) * 100;

    // compute v
    var v = cmax * 100;
    const hsv = [];
    hsv.push(Math.round(h),Math.round(s),Math.round (v));
    return hsv;

}
//CONVIERTO DE HSV a RGB
function hsvTo_Rgb(h, s, v) {
    var r, g, b;
    var i;
    var f, p, q, t;

    h = Math.max(0, Math.min(360, h));
    s = Math.max(0, Math.min(100, s));
    v = Math.max(0, Math.min(100, v));

    s /= 100;
    v /= 100;

    if(s == 0) {
        r = g = b = v;
        return [
            Math.round(r * 255),
            Math.round(g * 255),
            Math.round(b * 255)
        ];
    }

    h /= 60; // sector 0 to 5
    i = Math.floor(h);
    f = h - i; // factorial part of h
    p = v * (1 - s);
    q = v * (1 - s * f);
    t = v * (1 - s * (1 - f));

    switch(i) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;

        case 1:
            r = q;
            g = v;
            b = p;
            break;

        case 2:
            r = p;
            g = v;
            b = t;
            break;

        case 3:
            r = p;
            g = q;
            b = v;
            break;

        case 4:
            r = t;
            g = p;
            b = v;
            break;

        default: // case 5:
            r = v;
            g = p;
            b = q;
    }
    const rgb = [];
    rgb.push(Math.round(r * 255),Math.round(g * 255) ,Math.round(b * 255) );
    return rgb;
}


function filterBrilloSaturation(variable){
    let rgbTohsv = [];
    let hsvToRgb = [];
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let pixels = imageData.data;
    let numPixels = imageData.width * imageData.height;

    for ( let i = 0; i < numPixels; i++ ) {
        let r = pixels[ i * 4 ];
        let g = pixels[ i * 4 + 1 ];
        let b = pixels[ i * 4 + 2 ];
        rgbTohsv = rgb_to_hsv(r,g,b);
        let h,s,v;
        h = rgbTohsv[0];
        s=rgbTohsv[1];
        v = rgbTohsv[2];

        if(variable==="brillo"){
            let brillo=20;
            if(v+brillo>100){
                v=100
            }else{
                v=v+brillo
            }
        }else{
            let saturacion=20;
            if(s+saturacion>100){
                s=100
            }else{
                s=s+saturacion;
            }
        }

        hsvToRgb = hsvTo_Rgb(h,s,v);
        r = hsvToRgb[0];
        g = hsvToRgb[1];
        b = hsvToRgb[2];
        pixels[ i * 4 ] =  Math.round(r);
        pixels[ i * 4 + 1 ] = Math.round(g);
        pixels[ i * 4 + 2 ] = Math.round(b);
    }
    ctx.putImageData( imageData, 0, 0 );
}


document.querySelector('#filtro_brillo').addEventListener('click', function(){

    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let pixels = imageData.data;
    let numPixels = imageData.width * imageData.height;

    for ( let i = 0; i < numPixels; i++ ) {
        let r = pixels[ i * 4 ];
        let g = pixels[ i * 4 + 1 ];
        let b = pixels[ i * 4 + 2 ];

        pixels[ i * 4 ] = r + 20;
        pixels[ i * 4 + 1 ] = g + 20;
        pixels[ i * 4 + 2 ] = b + 20;
    }

    ctx.putImageData( imageData, 0, 0 );
});

//------------------------------------------Blur---------------------------------------------


function pixelRed(imageData, x, y) {
    return imageData.data[(x + y * imageData.width) * 4 + 0];
}

function pixelGreen(imageData, x, y) {
    return imageData.data[(x + y * imageData.width) * 4 + 1];
}

function pixelBlue(imageData, x, y) {
    return imageData.data[(x + y * imageData.width) * 4 + 2];
}

function getPixel(imageData, x, y){
    return imageData.data[(x + y * imageData.width) * 4];
}

function setPixel(imageData, x, y, r, g, b) {
    var index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = 255;
}

function setPixelAll(imageData, x, y, r) {
    var index = (x + y * imageData.width)*4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = r;
    imageData.data[index + 2] = r;
    imageData.data[index + 3] = 255;
}


document.querySelector('#filter_blur').addEventListener('click',function (){
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    let prom = 1/9;
    let R =0.0;
    let G =0.0;
    let B =0.0;

    for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {

            R = pixelRed(imageData, x-1, y-1) * prom +
                pixelRed(imageData, x, y-1) *prom +
                pixelRed(imageData, x+1, y-1) *prom +
                pixelRed(imageData, x-1, y) *prom +
                pixelRed(imageData, x, y) *prom +
                pixelRed(imageData, x+1, y) *prom +
                pixelRed(imageData, x-1, y+1) *prom +
                pixelRed(imageData, x, y+1) *prom +
                pixelRed(imageData, x+1, y+1) *prom;

            G=	pixelGreen(imageData, x-1, y-1) *prom +
                pixelGreen(imageData, x, y-1) *prom +
                pixelGreen(imageData, x+1, y-1) *prom +
                pixelGreen(imageData, x-1, y) *prom +
                pixelGreen(imageData, x, y) *prom +
                pixelGreen(imageData, x+1, y) *prom +
                pixelGreen(imageData, x-1, y+1) *prom +
                pixelGreen(imageData, x, y+1) *prom +
                pixelGreen(imageData, x+1, y+1) *prom;

            B= pixelBlue(imageData, x-1, y-1) * prom +
                pixelBlue(imageData, x, y-1) *prom +
                pixelBlue(imageData, x+1, y-1) *prom +
                pixelBlue(imageData, x-1, y) *prom +
                pixelBlue(imageData, x, y) *prom +
                pixelBlue(imageData, x+1, y) *prom +
                pixelBlue(imageData, x-1, y+1) *prom +
                pixelBlue(imageData, x, y+1) *prom +
                pixelBlue(imageData, x+1, y+1) *prom;

            setPixel(imageData, x, y,Math.round(R) ,Math.round(G), Math.round(B));
        }
    }

    ctx.putImageData( imageData, 0, 0 );
});

//   -------------------------------------------SOBEL-----------------------------------------------
document.querySelector('#filter_sobel').addEventListener('click',function (){
    let imageData = ctx.getImageData(0,0,canvas.width,canvas.height);

    let RX =0.0;
    let GX =0.0;
    let BX =0.0;
    let X=0.0;
    let Y=0.0;

    let sobelX =
        [
            [-1,0,1],
            [-2,0,2],
            [-1,0,1]
        ];

    let sobelY =
        [
            [1,2,1],
            [0,0,0],
            [-1,-2,-1]
        ];

    for (let x = 0; x <= canvas.width; x++) {
        for (let y = 0; y <= canvas.height; y++) {

            RX = pixelRed(imageData, x-1, y-1) * sobelX[0][0] +  pixelRed(imageData, x-1, y-1) * sobelY[0][0]+
                pixelRed(imageData, x, y-1) *sobelX[0][1] + pixelRed(imageData, x, y-1) *sobelY[0][1]+
                pixelRed(imageData, x+1, y-1) *sobelX[0][2] + pixelRed(imageData, x+1, y-1) *sobelY[0][2]+
                pixelRed(imageData, x-1, y) *sobelX[1][0] + pixelRed(imageData, x-1, y) *sobelY[1][0]+
                // pixelRed(imageData, x, y) *sobelX[1][1] +
                pixelRed(imageData, x+1, y) *sobelX[1][2] +pixelRed(imageData, x+1, y) *sobelY[1][2]+
                pixelRed(imageData, x-1, y+1) *sobelX[2][0] + pixelRed(imageData, x-1, y+1) *sobelY[2][0]+
                pixelRed(imageData, x, y+1) *sobelX[2][1] + pixelRed(imageData, x, y+1) *sobelY[2][1] +
                pixelRed(imageData, x+1, y+1) *sobelX[2][2] +pixelRed(imageData, x+1, y+1) *sobelY[2][2];

            GX=	pixelGreen(imageData, x-1, y-1) * sobelX[0][0] +  pixelGreen(imageData, x-1, y-1) * sobelY[0][0]+
                pixelGreen(imageData, x, y-1) *sobelX[0][1] + pixelGreen(imageData, x, y-1) *sobelY[0][1]+
                pixelGreen(imageData, x+1, y-1) *sobelX[0][2] + pixelGreen(imageData, x+1, y-1) *sobelY[0][2]+
                pixelGreen(imageData, x-1, y) *sobelX[1][0] + pixelGreen(imageData, x-1, y) *sobelY[1][0]+
                // pixelRed(imageData, x, y) *sobelX[1][1] +
                pixelGreen(imageData, x+1, y) *sobelX[1][2] +pixelGreen(imageData, x+1, y) *sobelY[1][2]+
                pixelGreen(imageData, x-1, y+1) *sobelX[2][0] + pixelGreen(imageData, x-1, y+1) *sobelY[2][0]+
                pixelGreen(imageData, x, y+1) *sobelX[2][1] + pixelGreen(imageData, x, y+1) *sobelY[2][1] +
                pixelGreen(imageData, x+1, y+1) *sobelX[2][2] +pixelGreen(imageData, x+1, y+1) *sobelY[2][2];

            BX= pixelBlue(imageData, x-1, y-1) * sobelX[0][0] +  pixelBlue(imageData, x-1, y-1) * sobelY[0][0]+
                pixelBlue(imageData, x, y-1) *sobelX[0][1] + pixelBlue(imageData, x, y-1) *sobelY[0][1]+
                pixelBlue(imageData, x+1, y-1) *sobelX[0][2] + pixelBlue(imageData, x+1, y-1) *sobelY[0][2]+
                pixelBlue(imageData, x-1, y) *sobelX[1][0] + pixelBlue(imageData, x-1, y) *sobelY[1][0]+
                // pixelRed(imageData, x, y) *sobelX[1][1] +
                pixelBlue(imageData, x+1, y) *sobelX[1][2] +pixelBlue(imageData, x+1, y) *sobelY[1][2]+
                pixelBlue(imageData, x-1, y+1) *sobelX[2][0] + pixelBlue(imageData, x-1, y+1) *sobelY[2][0]+
                pixelBlue(imageData, x, y+1) *sobelX[2][1] + pixelBlue(imageData, x, y+1) *sobelY[2][1] +
                pixelBlue(imageData, x+1, y+1) *sobelX[2][2] +pixelBlue(imageData, x+1, y+1) *sobelY[2][2];

            X = (RX+GX+BX)/3;
            let RXY=Math.sqrt(X*X);
            let value = document.querySelector('#slider_sobel').value;
            if(RXY > value) {
                setPixel(imageData, x, y, 0,0,0, 255);
            }else{
                setPixel(imageData, x, y, 255,255,255, 255);
            }

        }
    }

    ctx.putImageData( imageData, 0, 0 );
});
