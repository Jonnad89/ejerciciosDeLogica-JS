/*
function isPrime(num) {
    if (num <= 1) return false;
    for( let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(7)) 
console.log(isPrime(10)) 


function capitilizeWords(phrase) {
    return phrase
    .split(' ')
    .map( word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(capitilizeWords('hola, bienvenidos a mi clase de javascript'))
*/

function findDuplicates(arr){
    const duplicates = [];
    const seenNumbers = {};

    for( const num of arr) {
        if (seenNumbers[num]){
            if (!duplicates.includes(num)){
                duplicates.push(num);
            }
        }else{
            seenNumbers[num] = true;
        }
    }
    return duplicates
}

console.log(findDuplicates([1, 2, 3, 4, 3, 5, 6, 4, 7, 8, 8]))