1. // Reverse an array using two pointer approach.
let arr = [1,2,3,4,5];
let left = 0, right = arr.length -1;
while(left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
}
console.log(arr);

// Time complexity of this solution is O(n) time (good, since you visit each element once).
//Space is O(1) (in-place reversal, no extra array).


2. //find the Mximum element in an array
let ar1 = [1,32,12,65,71,2,3,76,31,11];
let max = ar1[0];
for(let i = 1; i < ar1.length; i++) {
    if(ar1[i] > max) {
        max = ar1[i];
    }
}
console.log("Maximum element in the array is: "+max);
//time complesixt is: O(n)
//space complexity is: O(1)


// some may ask "Can you solve this using built-in JS methods?"
// answer: yes we cn use Math.max(...arr) (but that uses extra space + spreads internally).
// Yes, but in interviews I prefer the loop method for O(1) space and clarity.
// 3. All zeros to left and all ones to right.

let arr3 = [1,0,0,0,1,1,1,0,1,0,1,0,1];
let i = 0 , j = 0;
    while(i<arr3.length){
    if(arr3[i] === 0){
        let temp = arr3[i];
        arr3[i] = arr3[j];
        arr3[j] = temp;
        j++;
    }
    i++;
}
console.log(arr3);