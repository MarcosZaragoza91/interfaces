let img = new Image();

// document.querySelector('#imagen').addEventListener('click',()=>{
//     img.src =
// })
document.getElementById("cargar").addEventListener('click',mostrar);

function mostrar(){
    var archivo = document.getElementById("imagen").value;
//    var img = new Image();
    if (archivo) {
      img.src = archivo;
      ctx.drawImage(img,10,10);
      // img.onload = function () {
      // }
    }
  }


  