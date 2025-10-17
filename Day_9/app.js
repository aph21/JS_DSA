//Find 3rd maximum number in an array
//If 3rd maximum number does not exist, return maximum number


//Approach 1:
//Time Complexity: O(nlogn)
//Space Complexity: O(n)
function thirdMax(nums){
    let distinct = new Set(nums);
    let arr = Array.from(distinct).sort((a,b) => b-a);
    if(arr.length >= 3) return arr[2];
    return arr[0];
}
console.log(thirdMax([3,2,1]));
console.log(thirdMax([1,2]));
console.log(thirdMax([2,2,3,1]));

//Approach 2: 