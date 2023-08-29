function crearPiramide(filas) {
    for(let i = 1; i <= filas; i++) {
        let espacios = " ".repeat(filas - i);
        let asteriscos = "*".repeat(2 * i - 1);
        console.log(espacios + asteriscos);
    }
}

crearPiramide(5)