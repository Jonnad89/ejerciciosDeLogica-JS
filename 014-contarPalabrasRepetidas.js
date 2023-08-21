function contarPalabrasRepetidas(cadena) {
    const palabras = cadena.toLowerCase().split(' ');
    const contador = {};

    for (const palabra of palabras) {
        if (palabra in contador) {
            contador[palabra]++;
        } else {
            contador[palabra] = 1;
        }
    }

    return contador;
}

const texto = 'La programación es genial. La programación es creativa. Aprendo mucho con la programación'
console.log(contarPalabrasRepetidas(texto))
