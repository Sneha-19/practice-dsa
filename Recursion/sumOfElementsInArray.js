let arr = [2,5,2,6,8,9,34,8];
function sumOfElementsInArray(n){
    if(n == 0) return arr[0];
    return arr[n] + sumOfElementsInArray(n-1)
}

console.log(sumOfElementsInArray(arr.length-1))