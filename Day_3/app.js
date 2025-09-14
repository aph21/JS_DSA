const prompt = require('prompt-sync') ();
let n = Number(prompt("enter a number: "))

//+++++++++++++++++++++++++++++++++++
// for(let i = 1; i <= n; i++) {
//     for(let j = 1; j <= n; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }
//++++++++++++++++++++++++++++++++++

//++++++++++++++++++++++++++++++++++
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(i+" ");
//     }
//     console.log()
// }

//++++++++++++++++++++++++++++++++++
// extraction of digits from a given number.

let digits = [];
while(n>0){
    let lastDig = n%10;
    digits.push(lastDig);
    n = Math.floor(n/10);
}
digits.reverse();
console.log("Digits are : ",digits);

//++++++++++++++++++++++++++++++++++