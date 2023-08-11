// Generar Números de Amigos

/* Escribe una función que tome un número "n" como entrada y devuelva
un arreglo de pares de números amigos dentro del rango de 1 a "n". Dos números
"a" y "b" se consideran amigos si la suma de los divisores propios de "a" es igual a la de "b", y la suma de los divisores propios de "b" es igual a "a" */

function divisoresPropios(num) {
  const divisores = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      divisores.push(i);
    }
  }
  return divisores;
}

function numerosAmigos(n) {
  const paresAmigos = [];
  for (let a = 2; a <= n; a++) {
    const b = divisoresPropios(a).reduce((sum, val) => sum + val, 0);
    if (b > a && divisoresPropios(b).reduce((sum, val) => sum + val, 0) === a) {
      paresAmigos.push([a, b]);
    }
  }
  return paresAmigos;
}

console.log(numerosAmigos(1000));
