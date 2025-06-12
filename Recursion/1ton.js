// Print 1 to n using recursion

function oneTon(n){
 if(n < 1) return;
 console.log(n)
 oneTon(--n)
}

oneTon(10)