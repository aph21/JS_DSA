// //1. Find the sum of elements in an array
// //Method 1: Using for loop
// function sumArr(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumArr([2,54,12,71,34,78]));

// //Method 2: Using reduce method

// function sumArr2(arr1){
//     return arr1.reduce((acc, curr) => {
//         return acc + curr;
//     }, 0);
// }

// console.log(sumArr2([2,54,12,71,34,78]));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // 2. Find the Maximm element in an array.
// //Method 1: Using reduce method

// function findMax(arr){
//     const max =  arr.reduce((acc, curr)=>{
//         return acc > curr ? acc : curr;
//     }, arr[0]);
//     return max;
// }
// console.log(findMax([2,54,12,71,34,78]));

// //Method 2: Using looping
// function finMax1(arr1){
//     let max = arr1[0];
//     for(let i = 0; i < arr1.length; i++){
//         if(arr1[i] > max) {
//             max = arr1[i];
//         }
//     }
//     return max;
// }

// console.log(finMax1([2,54,12,71,34,78]));


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// find the second max element in a given array.

let arr = [28, 6, 74, 48, 84, 79];
let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);

for(let i = 2; i< arr.length; i++){
    if(arr[i] > max){
        sMax = max;
        max = arr[i];
    } else if(arr[i] > sMax && arr[i] != max){
        sMax = arr[i];
    }
}
console.log('second max is: '+ sMax);