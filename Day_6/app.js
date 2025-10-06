// const prompt = require('prompt-sync') ();
// let target = Number(prompt("Enter the target number: "));
// let n = Number(prompt("Enter the number of elements: "));
// let arr = [];
// for(let i = 0; i< n; i++){
//     arr[i] = Number(prompt("Enter the element: "));
// }
// console.log("Given array is: ", arr);

// let index = -1;
// for(let j = 0; j<arr.length; j++){
//     if(arr[j] === target) {
//         index = j;
//         break;
//     }
// }
// if(index === -1) console.log("Element not found");
// else console.log("Element found at " + index + " index.");

// const prompt = require('prompt-sync')();

// // Read and validate inputs
// let target = Number(prompt("Enter the target number: "));
// if (Number.isNaN(target)) {
//   console.log("Invalid input! Target must be a number.");
//   process.exit(1);
// }

// let n = Number(prompt("Enter the number of elements: "));
// if (!Number.isInteger(n) || n < 0) {
//   console.log("Invalid input! Number of elements must be a non-negative integer.");
//   process.exit(1);
// }

// let arr = [];
// for (let i = 0; i < n; i++) {
//   let element = Number(prompt(`Enter element ${i + 1}: `));
//   if (Number.isNaN(element)) {
//     console.log("Invalid input! All elements must be numbers.");
//     process.exit(1);
//   }
//   arr.push(element);
// }
// console.log("Given array is:", arr);

// // Linear search function
// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) return i; // return first match
//   }
//   return -1;
// }

// // Perform search
// let foundIndex = linearSearch(arr, target);

// // Output result
// if (foundIndex === -1) {
//   console.log("Element not found");
// } else {
//   console.log(`Element found at index ${foundIndex}`);
// }


//Binary search

let arr = [10, 23, 45, 67, 69, 190, 200];

if(binarySearch(arr, 40) === -1) console.log("Element not found");
else console.log("Element found.");
function binarySearch(arr, target) {
  let s = 0, e = arr.length - 1;
  while ( s <= e) {
    let mid = Math.floor((s + e)/2);
    if(arr[mid] === target) return mid;
    else if(arr[mid] < target ) s = mid + 1;
    else e = mid - 1;
  }
  return -1
}