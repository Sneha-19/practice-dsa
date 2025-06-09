// Given an array nums containing n distinct numbers in the range [0,n], return the only number in the range that is missing from the array

function missingNumber(nums){
    let actualSum = (nums.length*(nums.length+1))/2;
    let sum = 0;
    let miss = 0;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
    }
    miss = actualSum - sum;
    return miss;
}

const result = missingNumber([3,0,1,2,5])
console.log(result)