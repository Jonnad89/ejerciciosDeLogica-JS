/* 
Escribir una función recursiva que calcule el factorial de un número dado. El factorial de un número "n" es el producto de todos los enteros positivos desde 1 hasta "n"
*/

function calcularFactorial(n) {
    if (n === 0 || n === 1){
        return 1;
    }
    return n * calcularFactorial(n - 1);
}

console.log(calcularFactorial(5))

/* n! = n * (n -1)! */