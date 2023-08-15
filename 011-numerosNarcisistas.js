function esNumeroNarcisista(n) {
    const digitos = n.toString().split('').map(Number);
    const numDigitos = digitos.length;
    const sumaPotencias = digitos.reduce((sum, digit) => sum + Math.pow(digit, numDigitos), 0);
    return n === sumaPotencias;
}

console.log(esNumeroNarcisista(153))
console.log(esNumeroNarcisista(370))
console.log(esNumeroNarcisista(123))