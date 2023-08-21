function generarTrianguloPascal(n) {
    const triangulo = [[1]];

    for (let i = 1; i < n; i++ ) {
        const filaAnterior = triangulo[i - 1];
        const nuevaFila = [1];

        for (let j =1; j < i; j++) {
            nuevaFila.push(filaAnterior[j - 1] + filaAnterior[j]);
        }

        nuevaFila.push(1);
        triangulo.push(nuevaFila)
    }

    return triangulo;
}

console.log(generarTrianguloPascal(5))