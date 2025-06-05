// Print the following number Pattern

// 1
// 10
// 101
// 1010
// 10101
// 101010

function numberPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < (i + 1); j++) {
            (n % 2) == 0 ? row += (n + j - 1) % 2 : row += (n + j) % 2;
        }
        console.log(row)
    }

    //alternative approach
    for (let i = 0; i < n; i++) {
        let row = "";
        let toggle = 1;
        for (let j = 0; j < (i + 1); j++) {
            row += toggle;
            toggle == 1 ? toggle = 0 : toggle = 1;
        }
        console.log(row)
    }
}

numberPattern(6)