// SUm of first n numbers

function sumOfN(n){
    if(n == 0) return 0;
    return n + sumOfN(n-1);
}

const result = sumOfN(10);
console.log(result)