// 1. // Reverse an array using two pointer approach.
// let arr = [1,2,3,4,5];
// let left = 0, right = arr.length -1;
// while(left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
// }
// console.log(arr);

// // Time complexity of this solution is O(n) time (good, since you visit each element once).
// //Space is O(1) (in-place reversal, no extra array).


// 2. //find the Mximum element in an array
// let ar1 = [1,32,12,65,71,2,3,76,31,11];
// let max = ar1[0];
// for(let i = 1; i < ar1.length; i++) {
//     if(ar1[i] > max) {
//         max = ar1[i];
//     }
// }
// console.log("Maximum element in the array is: "+max);
// //time complesixt is: O(n)
// //space complexity is: O(1)


// // some may ask "Can you solve this using built-in JS methods?"
// // answer: yes we cn use Math.max(...arr) (but that uses extra space + spreads internally).
// // Yes, but in interviews I prefer the loop method for O(1) space and clarity.
// // 3. All zeros to left and all ones to right.

// let arr3 = [1,0,0,0,1,1,1,0,1,0,1,0,1];
// let i = 0 , j = 0;
//     while(i<arr3.length){
//     if(arr3[i] === 0){
//         let temp = arr3[i];
//         arr3[i] = arr3[j];
//         arr3[j] = temp;
//         j++;
//     }
//     i++;
// }
// console.log(arr3);


//4.  array left rotation by one element.
//method 1: using iterative shift 
//TC : O(n)
//SC : O(1)

// let rot = [1,2,3,4,5];
// if(rot.length === 0) return arr;

// let temp = rot[0];
// for(let i = 0; i < rot.length - 1; i++) {
//     rot[i] = rot[i + 1];
// }
// rot[rot.length - 1] = temp;
// console.log(rot);

//5. Array right rotation by 1 element.


// let arr = [1,2,3,4,5];
// if(arr.length > 0) {
//     let last = arr[arr.length - 1];
//     for(let i = arr.length-1; i> 0; i--){
//         arr[i] = arr[i-1];
//     }
//     arr[0] = last;
// }
// console.log(arr);

//Array left rotation by k elements

//methode 1: using iterative shift
//TC : O(n*k)
//SC : O(1)

// let arr = [1,2,3,4,5,6,7,8];
// let k = 5;
// k = k % arr.length;
// for(let j = 1; j <= k; j++){
//     let copy = arr[0];
// for(let i = 0; i < arr.length - 1; i++){
//     arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = copy;
// }
// console.log(arr);

//method 2: Using extra array
//TC : O(n)
//SC : O(n)
// let arr = [1,2,3,4,5,6,7,8];
// let k = 2;
// let temp = new Array(arr.length);

// k= k % arr.length;

// for(let i = 0; i < arr.length ; i++){
//     temp[i] = arr[(i + k) % arr.length]
// }
// console.log(temp);

//method 3: Using blocking algorithm

// const prompt = require("prompt-sync")();
// let arr = [1,2,3,4,5,6,7,8];
// let k = Number(prompt("Enter the number of rotations: "));
// k = k % arr.length;

// function reverse(arr, i, j ) {
//     while(i< j) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         i++;
//         j--;
//     }
// }
// reverse(arr, 0, arr.length - 1);
// reverse(arr, 0, k - 1);
// reverse(arr, k, arr.length - 1);
// console.log(arr);