// Print the following star Pattern

//     *
//    **
//   ***
//  ****
// *****

function starPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < (n - (i + 1)); j++) {
            row += " "
        }
        for (let k = 0; k < (i + 1); k++) {
            row += "*"
        }
        console.log(row)
    }
}

starPattern(5)