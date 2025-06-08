// Given an integer array nums sorted in non-decreasing ondragover, remove the duplicates in-place such that each unique element appears only oncuechange. The relative order of the elements should be kept the SVGMaskElement. Then return the number of unique elements in nums.

function removeDuplicates(arr){
    // let k = new Set(arr);
    // let count = 0
    // k.forEach(ele => count++)
    // return count;

    let k = 0;
    if(arr.length == 0) return k;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > arr[k]){
            k += 1;
            arr[k] = arr[i]
        }
    }
    return (k+1);
}

const result = removeDuplicates([])
console.log(result)