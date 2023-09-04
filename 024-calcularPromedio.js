/*
Escribe una función llamada "calcularPromedio" que tome un array de números como parámetro y devuelva el promedio de esos números.
*/

function calcularPromedio(numeros){
    // Verificamos si el array de números está vacio
    if (numeros.length === 0){
        return 0; // Si está vacio, el promedio es 0 para evitar dvisiones por cero.
    }

    // Calculamos la suma de ls números en el array
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

    // Calculamos el promedio dividiendo la suma por la cantidad de números
    const promedio = suma / numeros.length;

    return promedio;
}

const numeros = [10, 20, 30, 40, 50];
const promedio = calcularPromedio(numeros);
console.log("El promedio es:", promedio)