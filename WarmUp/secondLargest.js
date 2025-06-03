// Given an array, find the second largest number

function secondLargest(arr) {
    if(arr.length < 2) return null;
    let firstLargest = arr[0];
    let secondLargest = arr[0];

    arr.map((ele) => {
        if (ele > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = ele;
        } else if (ele > secondLargest && ele != firstLargest) {
            //ele != firstLargest to remove duplicates otherwise duplicates will be considered as first and second largest
            secondLargest = ele;
        }
    })

    console.log(secondLargest)
}

secondLargest([2, 6, 16, 18, 32, 56, 8])