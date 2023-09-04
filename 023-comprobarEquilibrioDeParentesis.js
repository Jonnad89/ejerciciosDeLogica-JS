/* 
Escribe una función llamada "comprobarEquilibrio" que tome una cadena que contiene una serie de paréntesis (por ejemplo,"()()((()))") y determine si los paréntesis están equilibrados. Esto significa que cada paréntesis de apertura tiene un paréntesis de cierre correspondiente y en el orden correcto.
La función debe devolver "true" si los paréntesis están equilibrados y "false" si no lo están
*/

function comprobarEquilibrio(cadena){
    // Creamos una pila vacía para rastrear los paréntesis de apertura
    const pila = [];

    // Definimos cadenas que contienen los paréntesis de apertura y cierre
    const parentesisAbiertos = "([{";
    const parentesisCerrados = ")]}";

    for (let caracter of cadena) {
        // Verficamos si el carácter actual es un paréntesis de apertura
        if (parentesisAbiertos.includes(caracter)) {
            //Si es un paréntesis de apertura, lo agregamos a la pla
            pila.push(caracter);
        } else if (parentesisCerrados.includes(caracter)) {
            // Si es un parentesis de cierre, verificamos si coincide con el último parentesis de la pila
            const ultimoParentesisAbierto = pila.pop();

            // Comparamos los paréntesis de apertura y cierre para verificar si coinciden
            if (
                parentesisAbiertos.indexOf(ultimoParentesisAbierto) !== parentesisCerrados.indexOf(caracter) ){
                    // Si no coinciden, los paréntesis no están equilibrados, devolvemos false
                    return false
                }
            
        }
    }
    // Después de recorrer toda la cadena, verificamos si la pila está vacia
    return pila.length === 0;
}

// Ejemplos de uso de la función
console.log(comprobarEquilibrio("()"))
console.log(comprobarEquilibrio("()()"))
console.log(comprobarEquilibrio("(())"))
console.log(comprobarEquilibrio("(()))"))
console.log(comprobarEquilibrio(")("))