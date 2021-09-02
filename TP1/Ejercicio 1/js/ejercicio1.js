const rate = 100;
const max_number = 100000;
let mat = loadMatriz();

document.querySelector('#btn_matriz').addEventListener("click", loadMatriz);
value = maxMatriz(mat);
arr_max_min = max_value_row_par(mat);
aux = promedio_row(mat);
console.log (mat);
console.log ("El valor Maximo de la Matriz es:" + value);
console.log('El Maximo valor de la fila Par es: '+arr_max_min[0]);
console.log('El Minimo valor de la fila inpar es: '+arr_max_min[1]);
for (let i = 0; i < aux.length; i++) {
    console.log("El valor de la fila "+(i+1)+" es: "+ aux[i]);
}

function loadMatriz(){
    let matriz = [];
    let mat_a = [];

    for (let i = 0; i < rate; i++) {
        for (let j = 0; j < rate; j++) {
            let valor = Math.floor(Math.random()*max_number);
            mat_a.push(valor);
        }
        matriz.push(mat_a);
        mat_a = [];
    }
    return matriz;
}

function maxMatriz(matriz){

    max = 0;

    for (let i = 0; i < rate ; i++) {
        for (let j = 0; j < rate; j++) {
            valor = matriz[i][j];
            if (valor > max){
                max = valor;
            }
        }
    }
    return max;
}

function max_value_row_par(matriz){
    let max = 0;
    let min = max_number;
    for (let i = 0; i < rate; i++) {
        if (i % 2 === 0){
            for (let j = 0; j < rate; j++) {
                let max_value = matriz[i][j];
                if (max_value > max){
                    max = max_value;
                };
            }
        }else{
            for (let j = 0; j < rate; j++) {
                let min_value = matriz[i][j];
                if (min_value < min){
                    min = min_value;
                }
            }
        }
    }
    return [max,min];
}

function promedio_row(matriz){
    let total = 0;
    let aux=[];
    for (let i = 0; i < rate; i++) {
        for (let j = 0; j < rate; j++) {
            total = matriz[i][j];
        }
        total = total / rate;
        aux.push(total);
    }
    return aux;
}
