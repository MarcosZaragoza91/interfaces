class Imagen{

    constructor() {
        this.original = new Image();
        this.maxWidth = 1200;
        this.maxHeight = 800;
    }

    // Funcion encargada de cargar la imagen en el canvas
    cargarImagen(e){
        // Se detecta el canvas y seteamos el contexto
        let input = document.getElementById("imagen");
        let canva = document.getElementById('myCanvas');
        let contex = canva.getContext("2d");
        let maxWidth = 1200;
        let maxHeight = 800;
        //cuando cambia el estado del input imagen realiza una funcion anonima
        input.onchange = e => {
            //Accedemos al primer lugar del objeto, donde obtenemos el dato para cargar la imagem
            let file = e.target.files[0];
            //FileReader es un objeto con el único propósito los datos obtenidos anteriormente
            let reader = new FileReader();
            // lee el contenido del archivo elegido
            reader.readAsDataURL(file);
            // Una vez que termina la carga del archivo, procedemos a examinarlo
            reader.onload = readerEvent => {
                // Condicion para detercar diferentes tipos de imagen
                if (file.type.match('image.*')) {
                    // Cargamos el texto del archivo en una variable
                    let content = readerEvent.target.result;
                    // Seteamos el texto como ruta de la variable
                    this.original.src = content;
                    // Una vez que cargamos la imagen, procedemos a dibujarla
                    this.original.onload = function () {
                        // Limpiamos el canvas
                        ctx.clearRect(0, 0, canva.width, canva.height);
                        // Si la imagen cumple los parametros la dibujamos
                        if (this.width > maxWidth || this.height > maxHeight){
                            alert('No se puede cargar una imagen tan grande. Se permiten imagenes de 1200x800');
                        }else{
                            // Seteamos el tamaño del canvas acorde al tamaño de la imagen
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