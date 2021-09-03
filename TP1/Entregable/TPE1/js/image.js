let input = document.getElementById("imagen");
let canva = document.getElementById('myCanvas');
let contex = canva.getContext("2d");

input.onchange = e => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = readerEvent => {
        if (file.type.match('image.*')) {
            let content = readerEvent.target.result;
            let image = new Image();
            image.src = content;
            image.onload = function () {
                canva.width = image.width;
                canva.heigth = image.heigth;
                contex.drawImage(image,0,0);
            }
        }
    }
}