// Print the following number Pattern

// 1
// 12
// 123
// 1234

function numberPattern(n) {
    let row = "";
    for (let i = 1; i <= n; i++) {
        row += i;
        console.log(row);
    }
}

numberPattern(5)