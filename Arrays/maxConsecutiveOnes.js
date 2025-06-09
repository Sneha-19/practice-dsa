// Given a binary array nums, return the maximum number of consecutive 1's in the array

function maxConsecutiveOnes(nums){
    let count = 0;
    let maxCount = 0;

    for(let i=0; i<nums.length; i++){
        if(nums[i] == 1){
            count++; 
            if(count > maxCount){
                maxCount++;
            }
        } else {
            count = 0;
        }
    }

    return maxCount;
}

const result = maxConsecutiveOnes([1,0,1,1,0,1,1,1,0,0,1,1,1,1,0]);
console.log(result)