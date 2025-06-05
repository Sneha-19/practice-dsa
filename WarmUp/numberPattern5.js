// Print the following number Pattern

// 1
// 01
// 010
// 1010
// 10101

function numberPattern(n) {
    let toggle = 1;
    for(let i=0; i<n; i++){
        let row = "";
        for(let j=0; j<(i+1); j++){
            row += toggle;
            toggle == 1 ? toggle = 0 : toggle = 1
        }
        console.log(row)
    }
}

numberPattern(5)