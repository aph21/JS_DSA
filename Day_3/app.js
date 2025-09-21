// const prompt = require('prompt-sync') ();
// let n = Number(prompt("enter a number: "))

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

// let digits = [];
// while(n>0){
//     let lastDig = n%10;
//     digits.push(lastDig);
//     n = Math.floor(n/10);
// }
// digits.reverse();
// console.log("Digits are : ",digits);

//++++++++++++++++++++++++++++++++++
//count of digits in a given number
// let count = 0;
// if(n===0){
//     count = 1; //Edge case for zero 
// }else{
//     while(n>0){
//         n= Math.floor(n/10);
//         count++;
//     }
// }
// console.log("Count of numbers:" + count);
//++++++++++++++++++++++++++++++++++
//Reverse of a number

// let revNo = 0;
// while(n>0){
//     let lastdig = n%10;
//     n=Math.floor(n/10);
//     revNo = (revNo * 10) + lastdig; 
// }
// console.log("Reversed number is: " + revNo);
//++++++++++++++++++++++++++++++++++

// check if given number is palindrome or not -> palindrome means if given number's reverse is same as original number

// let lastDig = 0;
// let temp = n;
// let rev = 0;
// while(n>0){
//     lastDig = n%10;
//     n = Math.floor(n/10);
//     rev = (rev * 10) + lastDig;
// }
// if(temp === rev){
//     console.log(temp + "is a palindrome number");
// }else{
//     console.log(temp + "is not a palindrome number");
// }

//++++++++++++++++++++++++++++++++++

//ArmStrong Number-> A number is knowns as an Armstrong number if the sum of its digits each raised to power of the count of the digits is equal to the number itself.

// function isArmStrong(n){
//         let temp = n;
//         let count = n.toString().length;
//         let sum = 0;
//         while(n>0){
//             dig = n % 10;
//             sum = sum + (dig ** count);
//             n = Math.floor(n/10);
//         }
//         return sum === temp ? `${temp} is an ArmStrong Number` : `${temp} is Not an ArmStrong Number`;
// }

// console.log(isArmStrong(123));
// console.log(isArmStrong(153));
// console.log(isArmStrong(9474));
//+++++++++++++++++++++++++++++++++++++++