function encontrarMayorMenor(arreglo) {
    if (arreglo.lengt === 0) {
        return null;
    }

    let mayor = arreglo[0];
    let menor = arreglo[0];

    for ( let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
        if (arreglo[i] < menor) {
            menor = arreglo[i];
        }
    }

    return {mayor, menor}
}

const numeros = [15, 3, 9, 27, 5];
const resultado = encontrarMayorMenor(numeros);
console.log(resultado)