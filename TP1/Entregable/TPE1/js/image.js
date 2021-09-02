let c = document.querySelector("#myCanvas");
let contex = c.getContext("2d");

document.getElementById("cargar").addEventListener('click',mostrar);

function mostrar(){
    var archivo = document.getElementById("imagen").value;
    var img = new Image();
    if (archivo) {
      img.src = archivo;
      img.onload = function () {
          contex.drawImage(img,10,10);
      }
    }
  }


  