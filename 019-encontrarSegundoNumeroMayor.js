/* Escribir una función que tome un arreglo de números como entrada y devuelva el segundo número más grande del arreglo" */

function encontrarSegundoNumeroMayor(arreglo) {
    // Ordenar el arreglo en orden descendente usando una función de comparación
    const numerosOrdenados = arreglo.sort((a, b) => b - a);
    // Devuelve el segundo número más grande del arreglo ordenado
    return numerosOrdenados[1]

}

const numeros = [8, 5, 12, 9, 3];
console.log(encontrarSegundoNumeroMayor(numeros))