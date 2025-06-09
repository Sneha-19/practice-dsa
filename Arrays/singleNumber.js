// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.

function singleNumber(nums) {
    //Approach 1 - requires O(n) space  
    // let hash = {};

    // for (let i = 0; i < nums.length; i++) {
    //     if (!hash[nums[i]]) {
    //         hash[nums[i]] = 1;
    //     } else {
    //         hash[nums[i]]++;
    //     }
    // }

    // for(let i=0; i<nums.length; i++){
    //     if(hash[nums[i]] == 1){
    //         return nums[i]
    //     }
    // }

    let xor = 0;

    for(let i=0; i<nums.length; i++){
        xor = xor ^ nums[i]
    }
 
    return xor;
}

const result = singleNumber([3, 1, 5, 4, 1, 5, 3])
console.log(result);