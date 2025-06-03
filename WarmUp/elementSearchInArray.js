// Write a function that searches for an element in an array and returns the index, if the element is not present then return -1

function searchArray(arr, ele){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == ele) {
            return i;
        } 
    }
    return -1;
}

const result = searchArray([2,4,7,2,8], 10)
console.log(result)