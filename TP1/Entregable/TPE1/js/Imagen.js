class Imagen{

    constructor() {
        this.original = new Image();
    }

    cargarImagen(e){

        let input = document.getElementById("imagen");
        let canva = document.getElementById('myCanvas');
        let contex = canva.getContext("2d");
        let original = new Image();
        input.onchange = e => {
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = readerEvent => {
                if (file.type.match('image.*')) {
                    let content = readerEvent.target.result;
                    original.src = content;
                    original.onload = function () {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        canva.width = original.width;
                        canva.heigth = original.heigth;
                        let img = new Imagen();
                        img.setOriginal(original);
                        contex.drawImage(original,0,0);
                    }
                }
            }
        }
    }

    getOriginal() {
        return this.original;
    }

    setOriginal(value) {
        this.original = value;
    }

}