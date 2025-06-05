// Given a signed 32-bit integer x, return x with its digits reveresed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31-1], then return 0.

function reverseInteger(x) {
    let res = x; 
    let reverse = 0;
    if(x < 0) {
        x = Math.abs(x);
    }
    while(x > 0){
        reverse = (reverse * 10) + (x%10);
        x = Math.floor(x/10);
    }

    let limit = Math.pow(2, 31);
    if(res < -limit || res > limit - 1) return 0;

    return (res<0) ? -reverse : reverse;
}

const result = reverseInteger(-123)
console.log(result)