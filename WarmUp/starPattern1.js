// Print n*n star pattern
           
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

function starPattern(n) {
    for(let i=0; i<n; i++){
        let str = " ";
        for(let j=0; j<n; j++){
            str = str + " *"
        }
         console.log(str)
    }
}

starPattern(5)