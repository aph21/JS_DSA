// check palindrome number.

//Approach 1: String Converion

function isArrPalindrome(arr){
    let s = 0, e = arr.length - 1;
    while(s < e){
        if(arr[s] !== arr[e]) return false;
        s++;
        e--;
    }
    return true;
}
console.log(isArrPalindrome([0, 1, 2, 1, 0]));
console.log(isArrPalindrome([0, 1, 2, 3, 0]));

// Time Complexity -> o(n)
// Space Complexity -> o(1)



// approach 2: Reverse the array and compare ( simple but not optimal)

 function isArrpalindrom2(arr2) {
    return JSON.stringify(arr2) === JSON.stringify(arr2.slice().reverse());
 }
 console.log(isArrpalindrom2([0, 1, 2, 1, 0]));
 console.log(isArrpalindrom2([0, 1, 2, 3, 0]));

