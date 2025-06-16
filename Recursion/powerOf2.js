// Given an integer n, return true if it is a power of 2, otherwise return false.

function powerOf2(n){
    if(n == 1) return true;
    if(n < 1 || (n%2 !== 0)) return false;
    
    return powerOf2(n/2);

}

console.log(powerOf2(2))