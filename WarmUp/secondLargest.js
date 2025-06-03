// Given an array, find the second largest number

function secondLargest(arr) {
    let firstLargest = arr[0];
    let secondLargest = arr[0];

    arr.map((ele) => {
        if (ele > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = ele;
        } else if (ele > secondLargest) {
            secondLargest = ele;
        }
    })

    console.log(secondLargest)
}

secondLargest([2, 6, 16, 18, 32, 56, 8])