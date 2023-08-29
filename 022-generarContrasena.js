function generarContrasena(longitud) {
    // Definimos los caracteres posibles para la contraseña
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let contrasena ="";

    //Generamos la contraseña caracter por caracter
    for(let i = 0; i < longitud; i++){
        //Generamos un índice aleatorio para seleccionar un caracter
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        // Añadimos el caracter corresondiente a la contraseña
        contrasena += caracteres.charAt(indiceAleatorio);
    }

    // Devolvemos la contraseña generada
    return contrasena;
}

// Longitud deseada para la contraseña
const longitudContrasena = 15;
// Generamos una contraseñañ de la longitud deseada
const contrasenaGenerada = generarContrasena(longitudContrasena)
// Mostramos la contraseña generada en la consola
console.log("Contraseña generada:", contrasenaGenerada)