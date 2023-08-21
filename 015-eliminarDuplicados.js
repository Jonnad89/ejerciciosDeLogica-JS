function eliminarDuplicados(arreglo) {
    return[...new Set(arreglo)];
}

const numeros =[1, 2, 3,2 ,4, 3, 5];
console.log(eliminarDuplicados(numeros))