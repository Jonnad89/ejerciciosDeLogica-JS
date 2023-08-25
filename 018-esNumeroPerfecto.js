/*
Escribir una función que tome un número como entrada y determine si es un número perfecto. Un número perfecto es aquel cuya suma de sus divisores propios(excluyendo él mismo) es igual al número)
*/

function esNumeroPerfecto(numero) {
    let sumaDivisores = 0;
    for (let i = 1; i < numero; i++){
        if (numero % i === 0){
            sumaDivisores += i;
        }
    }
    return sumaDivisores === numero;
}

console.log(esNumeroPerfecto(28))
console.log(esNumeroPerfecto(12))