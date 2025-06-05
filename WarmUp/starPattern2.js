// Print the following star Pattern

// *
// **
// ***
// ****

function starPattern(n) {
    let row = "";
    for (let i = 0; i < n; i++) {
        row += " *"
        console.log(row)
    }
}

starPattern(5)