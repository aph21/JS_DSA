//1. Find the sum of elements in an array
//Method 1: Using for loop
function sumArr(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sumArr([2,54,12,71,34,78]));

//Method 2: Using reduce method

function sumArr2(arr1){
    return arr1.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
}

console.log(sumArr2([2,54,12,71,34,78]));