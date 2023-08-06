function contarVocales(cadena) {
    const vocales = 'aeiouAEIOU';
    let count = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            count++;
        }
    }

    return count;
}

const texto = 'Hola, bienvenidos a la clase de JavaScript';
console.log(contarVocales(texto))