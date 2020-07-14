// Write a function that will receive an array of sorted numbers and a target range
// Return the maximum sum in the range in the array

function maxSubarraySum(arr, count) {
	if (arr.length < count) return null;

	let temp = -Infinity,
		currentValue = 0;

	for (let i = 0; i < count; i++) {
		currentValue += arr[i];
	}

	temp = currentValue;

	for (let i = count; i < arr.length; i++) {
		temp = arr[i] + temp - arr[i - count];
		currentValue = Math.max(currentValue, temp);
	}

	return currentValue;
}

maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([-3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null
