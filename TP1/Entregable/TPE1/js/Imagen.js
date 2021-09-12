class Imagen{

    constructor() {
        this.original = new Image();
    }

    cargarImagen(e){
        let input = document.getElementById("imagen");
        let canva = document.getElementById('myCanvas');
        let contex = canva.getContext("2d");
        //this.original = new Image();
        input.onchange = e => {
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = readerEvent => {
                if (file.type.match('image.*')) {
                    let content = readerEvent.target.result;
                    this.original.src = content;
                    this.original.onload = function () {
                        ctx.clearRect(0, 0, canva.width, canva.height);
                        if (this.width > 1200 || this.height > 800){
                            alert('No se puede cargar una imagen tan grande');
                        }else{
                            canva.width = this.width;
                            canva.height = this.height;
                            contex.drawImage(this,0,0);
                        }
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