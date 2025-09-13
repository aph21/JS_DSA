// const prompt = require('prompt-sync') ()
// let n = prompt("enter a number")

// for(let i = 1; i <= num; i++){
//     for(let j = 1; j<= i; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

//---------------------------------------------

// const prompt = require('prompt-sync') ()
// let num = prompt('Enter a number: ');

// for(let i = 1; i<= num; i++){
//     for (let j = 1; j<= i; j++) {
//         process.stdout.write(j +" ");
//     }
//     console.log();
// }

//-----------------------------------------------
// const prompt = require('prompt-sync') ()
// let n = prompt('Enter a number: ');
// for(let i=1;i<=n;i++){
//     for (let j=1;j<=i;j++){
//         process.stdout.write(String.fromCharCode(64 + j)+ " ");
//     }
//     console.log();
// }


//-----------------------------------------------

// const prompt = require('prompt-sync') ()
// let n = prompt("Enter a number:");

// let temp = n;
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= temp; j++){
//         process.stdout.write("* ");
//     }
//     temp--;
//     console.log();
// }

//-------------------------------------------

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n-i+1; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

//--------------------------------------------

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j<= n-i; j++){
//         process.stdout.write("  ");
//     }
//     for(let j = 1; j <= i; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

//---------------------------------------------
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j<= n-i; j++){
//         process.stdout.write(" ");
//     }
//     for(let j = 1; j <= i; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }

//---------------------------------------------

// const prompt = require('prompt-sync') ()
// let n = Number(prompt("enter a number"))

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==j || i+j===n+1){
//             process.stdout.write("* ");
//         }else{
//             process.stdout.write(" ");
//         }
//     }
//     console.log();
// }

//---------------------------------------------

// const prompt = require('prompt-sync') ()
// let n = Number(prompt("enter a number"))

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=(n*2)-1;j++){
//         if(i==j || i+j===(n*2)){
//             process.stdout.write("* ");
//         }else{
//             process.stdout.write(" ");
//         }
//     }
//     console.log();
// }
//---------------------------------------------

const prompt = require('prompt-sync') ()
let n = prompt("enter a number"); //👉 Here prompt returns a string. In JavaScript, "5" - 1 works fine due to implicit conversion, but still better to convert it explicitly: let n = Number(prompt("Enter a number:"))

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n-i+1; j++){
//         process.stdout.write(j+" ");
//     }
//     console.log();
// }

//---------------------------------------------

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j<= n-i; j++){
//         process.stdout.write("  ");
//     }
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(j+" ");
//     }
//     console.log();
// }

//---------------------------------------------

// let count = 1;
// for(let i = 1; i<=n;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(count+" ");
//         count++;
//     }
//     console.log();
// }