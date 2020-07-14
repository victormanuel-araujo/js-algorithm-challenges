// Write a function that will receive a sorted array of numbers and a target average
// Return if inside the array we can found the target average

function averagePair(arr, avg) {
	if (arr.length === 0) return false;

	let start = 0,
		end = arr.length - 1;

	while (start < end) {
		const result = (arr[start] + arr[end]) / 2;

		if (result === avg) {
			return true;
		} else if (result < avg) {
			start++;
		} else {
			end--;
		}
	}

	return false;
}

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
