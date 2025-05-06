// JavaScript program to find maximum Subarray Sum in Circular
// array using prefix and suffix

function circularSubarraySum(arr) {
    let n = arr.length;
    let suffixSum = arr[n - 1];

    // maxSuffix array to store the value of 
    // maximum suffix occurred so far.
    let maxSuffix = new Array(n + 1).fill(0);
    maxSuffix[n - 1] = arr[n - 1];

    for(let i = n - 2; i >= 0; i--) {
        suffixSum += arr[i];
        maxSuffix[i] = Math.max(maxSuffix[i + 1], suffixSum);
    }

    // circularSum is Maximum sum of circular subarray
    let circularSum = arr[0];

    // normalSum is Maximum sum subarray considering 
    // the array is non-circular
    let normalSum = arr[0];

    let currSum = 0;
    let prefix = 0;

    for(let i = 0; i < n; i++) {
        
        // Kadane's algorithm
        currSum = Math.max(currSum + arr[i], arr[i]);
        normalSum = Math.max(normalSum, currSum);

        // Calculating maximum Circular Sum
        prefix += arr[i];
        circularSum = Math.max(circularSum, prefix + maxSuffix[i + 1]);
    }

    return Math.max(circularSum, normalSum);
}

const arr = [8, -8, 9, -9, 10, -11, 12];
console.log(circularSubarraySum(arr));