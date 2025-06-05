// Print the following number Pattern

// 12345
// 1234
// 123
// 12
// 1

function numberPattern(n) {
    for(let i=n; i>0; i--){
        let row = "";
        for(let j=1; j<=i; j++){
            row += j;
        }
        console.log(row)
    }
}

numberPattern(5)