// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number i sthe sum of the two preeceding ones, starting from 0 and 1. 

function fibonacciNumber(n){
    if(n == 0) return 0;
    if(n == 1) return 1;
    return fibonacciNumber(n-1) + fibonacciNumber(n-2);
}

console.log(fibonacciNumber(3))