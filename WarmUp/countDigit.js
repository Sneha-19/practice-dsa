// Write a function that returns the count of digits in a number

// function countDigits(num) {
//     let count = num+"";
//     console.log(count.length)
// }

function countDigits(num) {
    if (num == 0) return 1;

    num = Math.abs(num);
    let count = 0;
    while(num > 0){
        count += 1;
        num = Math.floor(num/10);
    }
    console.log(count)
}

countDigits(538659816549365070709)