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

// 3. find the second max element in a given array.

// let arr = [28, 6, 74, 48, 84, 79];
// let max = Math.max(arr[0], arr[1]);
// let sMax = Math.min(arr[0], arr[1]);

// for(let i = 2; i< arr.length; i++){
//     if(arr[i] > max){
//         sMax = max;
//         max = arr[i];
//     } else if(arr[i] > sMax && arr[i] != max){
//         sMax = arr[i];
//     }
// }
// console.log('second max is: '+ sMax);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//4. Find the 2nd min element in a given array

// let arr = [28, 6, 74, 48, 84, 79];
// let min = Math.min(arr[0], arr[1]);
// let sMin = Math.max(arr[0 ], arr[1]);

// for(let i = 2; i < arr.length; i++){
//     if( arr[i] < min){
//         sMin = min;
//         min = arr[i];
//     } else if(arr[i] < sMin && arr) {
//         sMin = arr[i];
//     }
// }
// console.log('second min is: ' + sMin);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // 5. Reverse an array
//method 1: using temp array
// let arr = [1,2,3,4,5,6];

// let temp = new Array(arr.length);
// let i = 0;
// for(let j = arr.length - 1; j >= 0; j--) {
//     temp[i] = arr[j];
//     i++;
// }
// console.log(temp);


// method 2: two pointer swap

// let arr = [1,2,3,4,5,6];
// let left = 0, right =arr.length - 1;

// while(left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left ++;
//     right --;
// }
// console.log(arr);

//Method 3: Simple Loop with Push

// let arr = [1,2, 3,4,5,6];
// let temp = [];
// for(let i = arr.length - 1; i >= 0; i--){
//     temp.push(arr[i]);
// }
// console.log(temp);

//Method 4: 
// let arr = [1,2,3,4,5,6];
// let i = 0, j = arr.length - 1;

// while(i < j) {
//     temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
// console.log(arr);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 6. All zeros to left and all ones to right.

// let arr = [1,0,0,0,1,1,1,0,1,0,1,0,1];
// let i = 0, j = 0;
// while(i<arr.length){
//     if(arr[i] === 0){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++;
//     }
//     i++;
// }
// console.log(arr);