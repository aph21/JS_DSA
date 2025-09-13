// 1. Strong Number
// const prompt = require("prompt-sync") ();
// let n = parseInt(prompt("Enter a number:"))


// let temp = n;
// let sum = 0;

// while(temp > 0) {
//     let digit = temp % 10;
//     temp = Math.floor(temp / 10);


//     let fact = 1;
//     for(let i = 1; i<=digit; i++){
//         fact = fact * i;
//     }
//     sum = sum + fact;
// }

// if(sum === n){
//     console.log(n + " is a Strong Number");
// } else {
//     console.log(n + " is not a Strong Number");
// }

//------------------------------------------------------------------------

//Array Operations:
//1. push() or unshift()
//2.pop() or shift()
// let arr = [10, 20, 30, 40];
// arr.push(50); // adds 50 at the end of the array
// arr.unshift(5); // adds 5 at the beginning of the array
// arr.pop(); // removes the last element of the array
// arr.shift(); // removes the first element of the array
// console.log(arr);


//------------------------------------------------------------------------
// let prompt = require("prompt-sync") ();
// let size = Number(prompt("Enter the size of the array:"))

// let arr = new Array(size);
// for(let i = 0; i<arr.length; i++){
//     arr[i] = Number(prompt("Enter the elements:"))
// }

// console.log(arr)

//------------------------------------------------------------------------
//sum of array elements 
// let prompt = require("prompt-sync") ();
// let size = Number(prompt("Enter the size of the array:"));
// let sum = 0;

// let arr = new Array(size);
// for(let i = 0; i<arr.length; i++){
//     arr[i] = Number(prompt("Enter the elements:"))
//     sum = sum + arr[i];
// }

// console.log(sum)

//------------------------------------------------------------------------

// Calculate the sum and Mean of an array

const prompt = require("prompt-sync") ()
let n = Number(prompt("Enter the size of the array:"));
let sum = 0;

let arr = new Array(n);
for(let i = 0; i <= n-1; i++){
    arr[i] = Number(prompt("Enter the element:"));
    sum = sum + arr[i];
    
}
let mean = sum / n;
console.log("Sum is: " + sum);
console.log("Mean is: " + mean);