function fibonacciRecursivo(n){
    if (n === 0){
        return 0;
    }else if (n ===1){
        return 1
    }else{
        return fibonacciRecursivo( n - 1 ) + fibonacciRecursivo( n - 2 );
    }
}

console.log(fibonacciRecursivo(5))
console.log(fibonacciRecursivo(8))

/*
fibonacciRecursivo(5) = fibonacciRecursivo(4) + fibonacciReursivo(3)
                      = fibonacciRecusivo(3) + fibonacciRecusivo(2) + fibonacciRecusivo(2) + fibonacciRecusivo(1)
                      fibonacciRecusivo(2) + fibonacciRecusivo(1) + fibonacciRecusivo(1) + fibonacciRecusivo(0) + fibonacciRecusivo(1) + fibonacciRecusivo(0) +1

                      = ((1 + 1) + (1 + 0)) + ((1+0) +1)
                      = (2+1) + (1+1)
                      = 3 + 2
                      = 5
*/