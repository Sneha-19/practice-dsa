// You are given two integer arrays num1 and num2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and num2. Merge nums1 and nums2 into a single array sorted in non-descreaing order. The final sorted array should not be returned by the function, but instead be sorted inside the array nums1. To accomodate this, nums1 has a length m+n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

function merge(nums1, m, nums2, n){

    //Brute force approach
    // for(let i=0; i<n; i++){
    //     nums1[m+i] = nums2[i];
    // }

    // Code for sorting
    // for(let i=0; i<(m+n); i++){
    //    if(nums1[i+1] < nums1[i]){
    //         let temp = nums1[i];
    //         nums1[i] = nums1[i+1];
    //         nums1[i+1] = temp;
    //    }
    // }

    // nums1.sort();

    // return nums1;

    //Approach 2

    // let nums1Copy = nums1.slice(0, m);
    // let p1 = 0;
    // let p2 = 0;

    // for(let i=0; i<(m+n); i++){
    //     if( p2>=n || (p1<m && nums1Copy[p1] < nums2[p2])){
    //         nums1[i] = nums1Copy[p1];
    //         p1++;
    //     } else {
    //         nums1[i] = nums2[p2];
    //         p2++;
    //     }
    // }

    // return nums1;


    //Approach 3 - without creating a copy to save space complexity

    let p1 = (m-1);
    let p2 = (n-1);

    for(let i = (m+n-1); i >= 0; i--){
        if(p2<0 || (p1>=0 && nums1[p1] > nums2[p2])){
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
    return nums1;
}

const result = merge([1,2,3,0,0,0], 3, [2,5,6], 3);
console.log(result)