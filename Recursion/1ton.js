// Print 1 to n using recursion

function nToOne(n){
 if(n < 1) return;
 console.log(n)
 nToOne(--n)
}

nToOne(10)


let n = 10;
function oneTon(x) {
  if(x > n) return;
  console.log(x);
  oneTon(++x);
}

oneTon(1)