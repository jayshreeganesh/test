# Python program to find maximum Subarray Sum in Circular
# array using prefix and suffix

def circularSubarraySum(arr):
    n = len(arr)
    suffixSum = arr[n - 1]

    # maxSuffix array to store the value of 
    # maximum suffix occurred so far.
    maxSuffix = [0] * (n + 1)
    maxSuffix[n - 1] = arr[n - 1]

    for i in range(n - 2, -1, -1):
        suffixSum += arr[i]
        maxSuffix[i] = max(maxSuffix[i + 1], suffixSum)

    # circularSum is Maximum sum of circular subarray
    circularSum = arr[0]

    # normalSum is Maximum sum subarray considering 
    # the array is non-circular
    normalSum = arr[0]

    currSum = 0
    prefix = 0

    for i in range(n):
        
        # Kadane's algorithm
        currSum = max(currSum + arr[i], arr[i])
        normalSum = max(normalSum, currSum)
        
		# Calculating maximum Circular Sum
        prefix += arr[i]
        circularSum = max(circularSum, prefix + maxSuffix[i + 1])

    return max(circularSum, normalSum)

arr = [8, -8, 9, -9, 10, -11, 12]
print(circularSubarraySum(arr))