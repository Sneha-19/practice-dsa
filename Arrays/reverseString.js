// Write a function that reverses a string. The input string is given as an array of characters. You must do this by modifying the input array in-place with O(1) extra memeory.

function reverseString(s) {
    let len = s.length;
    let n = Math.floor(len/2)
    for(let i=0; i<n; i++){
        let temp = s[i];
        s[i] = s[len-i-1];
        s[len-i-1] = temp;
    }
    return s;
}

const result = reverseString(['s','n','e','h','a','a']);
console.log(result)