// // check palindrome number.

// //Approach 1: String Converion

// function isArrPalindrome(arr){
//     let s = 0, e = arr.length - 1;
//     while(s < e){
//         if(arr[s] !== arr[e]) return false;
//         s++;
//         e--;
//     }
//     return true;
// }
// console.log(isArrPalindrome([0, 1, 2, 1, 0]));
// console.log(isArrPalindrome([0, 1, 2, 3, 0]));

// // Time Complexity -> o(n)
// // Space Complexity -> o(1)



// // approach 2: Reverse the array and compare ( simple but not optimal)

//  function isArrpalindrom2(arr2) {
//     return JSON.stringify(arr2) === JSON.stringify(arr2.slice().reverse());
//  }
//  console.log(isArrpalindrom2([0, 1, 2, 1, 0]));
//  console.log(isArrpalindrom2([0, 1, 2, 3, 0]));

//-----------------------------------------------------------------------------------------------------------------

// Find the second Maximum element in array

let arr = [28, 6, 74, 48, 84, 79];
let max = -Infinity;   // start with the lowest possible value
let sMax = -Infinity;  // second max also starts at lowest

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        // if current element is greater than max
        sMax = max;     // old max becomes second max
        max = arr[i];   // update max
    } 
    else if (arr[i] > sMax && arr[i] !== max) {
        // if current element is between max and sMax
        sMax = arr[i];
    }
}

console.log("Second maximum element is:", sMax);
// Time Complexity -> o(n)
// Space Complexity -> o(1)