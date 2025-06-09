//Give an integer array nums, move all the 0's to the end of it while maintaining the relative order of the non-zero elements. In should be done in-place without making a copy of the array.

function moveZeroes(arr){
    let p = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] != 0){
            arr[p] = arr[i];
            arr[i] = 0;

            if(arr[p+1] == 0) {
                p += 1;
            } else {
                p = i;
            }
        }
    }

    //OR
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i] != 0){
    //         arr[p] = arr[i];
    //         p++
    //     }
    // }

    // for(let i=p; i<arr.length; i++){
    //     arr[i] = 0;
    // }

    return arr;
}

const result = moveZeroes([0,0,1,7,0,2,0])
console.log(result)