function encontrarPalabrasMasLargas(cadena) {
    const palabras = cadena.split(' ');
    let longitudMaxima = 0;
    const palabrasMasLargas = [];

    for (const palabra of palabras) {
        const longitud = palabra.length;
        if(longitud > longitudMaxima) {
            longitudMaxima = longitud;
            palabrasMasLargas.length = 0;
            palabrasMasLargas.push(palabra);
        } else if(longitud === longitudMaxima) {
            palabrasMasLargas.push(palabra);
        }
    }

    return palabrasMasLargas
}

const texto = "La programación es un mundo emocionante y desafiante";
const resultado = encontrarPalabrasMasLargas(texto);
console.log(resultado)