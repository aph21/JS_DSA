// Reverse an array using two pointer approach.
let arr = [1,2,3,4,5];
let left = 0, right = arr.length -1;
while(left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
}
console.log(arr);