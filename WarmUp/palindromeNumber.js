// Given an integer x, return true if x is a palindrome and false otherwise

function palindromeNumber(x) {
    if (x == 0) return true;

    let value = x;
    let palindrome = 0;
    while (x > 0) {
        palindrome = (palindrome * 10) + (x % 10);
        x = Math.floor(x / 10)
    }
    return value == palindrome;
}

const result = palindromeNumber(121);
console.log(result)