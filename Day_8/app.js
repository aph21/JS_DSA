//Bubble sort : 
//Time complexity : O(n^2)
//Space complexity : O(1)
//definition : It's a simple sorting algorithm that repeatedly steps through the list,
// compares adjacent elements and swaps them if they are in wrong order.
// The pass through the list is repeated until the list is sorted.

//Approach 1: Not efficient but simple.

function bubbleSort(arr){
    for(let i = 0; i< arr.length - 1; i++) {
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([6, 3, 1, 8, 12, 2, 5]));

//here we have used -i in inner loop because after each pass through the list,
// the largest element will be at the end of the list, so we don't need to compare it again.

//Approach 2: optimized version using flag 
//Time complexity : O(n)
//Space complexity : O(1)
//definition : It's a simple sorting algorithm that repeatedly steps through the list,
// compares adjacent elements and swaps them if they are in wrong order.
// The pass through the list is repeated until the list is sorted.
//In this approach we are using a flag to check if any swap is done in a pass through the list.
//If no swap is done, then the list is sorted.

function bubbleSort1(arr1){
    let swapped;
    for(let i = 0; i <arr1.length - 1; i++){
        swapped = false;
        for(let j = 0; j < arr1.length - 1 - i; j++){
            if(arr1[j] > arr1[j+1]){
                [arr1[j], arr1[j+1]] = [arr1[j+1], arr1[j]];
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr1;
}
// console.log(bubbleSort1([6, 22, 1, 8, 12, 2, 5]));

//===============================================================================

// Selection sort :
//Time complexity : O(n^2)
//Space complexity : O(1)
//definition : It's a simple sorting algorithm that repeatedly steps through the list,
// finds the minimum element and swaps it with the element at the current position.
// The pass through the list is repeated until the list is sorted.

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let minIdx = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if(minIdx !== i){
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    return arr;
}
console.log(selectionSort([6, 3, 1, 8, 12, 2, 5]));

