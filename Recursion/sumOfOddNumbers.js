arr = [2,5,2,5,3,7,83,7,4,8]
function sumOfOddNumbers(n){
    if(n == 0 && (arr[n]%2 != 0)) return arr[n];
    if(n == 0 ) return 0;
    if(arr[n]%2 != 0){
        return arr[n] + sumOfOddNumbers(n-1)
    } else {
        return 0 + sumOfOddNumbers(n-1)
    }
}

n = arr.length;
console.log(sumOfOddNumbers(n-1))