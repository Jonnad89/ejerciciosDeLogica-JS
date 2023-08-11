//Generar una espiral numérica

/* Escribe una función que tome un número "n" como entrada y genere una matriz de tamaño "n x n" que forme una espiral numérica en sentido horario comenzando desde el número 1 */

function generarEspiralNumerica(n) {
    const matriz = new Array(n).fill().map(() => new Array(n).fill(0));
    let num = 1;
    let inicioFila = 0,
    finFila = n - 1,
    inicioColumna = 0,
    finColumna = n - 1;

    while (inicioFila <= finFila && inicioColumna <= finColumna) {
        for( let i = inicioColumna; i <= finColumna; i++) {
            matriz[inicioFila][i] = num++;
        }
        inicioFila++;

        for (let i = inicioFila; i <= finFila; i++) {
            matriz[i][finColumna] = num++;
        }
        finColumna--;

        if (inicioFila <= finFila) {
            for(let i = finColumna; i >= inicioColumna; i--){
                matriz[finFila][i] = num++;
            }
            finFila--;
        }

        if (inicioColumna <= finColumna) {
            for(let i = finFila; i >= inicioFila; i--){
                matriz[i][inicioColumna] = num++;
            }
            inicioColumna++;
        }
    }

    return matriz;
}

console.log(generarEspiralNumerica(4))