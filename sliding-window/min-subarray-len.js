// Write a function that receives an array and a target value
// Return the minimum range inside the array that the sum can be equals or higher

function minSubarrayLen(arr, value) {
	let temp = 0;
	let start = 0;
	let end = 0;
	let range = Math.max();

	for (let i = 0; i < arr.length; i++) {
		if (temp < value) temp += arr[i];
		else if (temp >= value && end === 0) {
			end = i;
			range = i;
		}
	}

	if (end === 0) {
		return 0;
	}

	for (let i = end; i <= arr.length; i++) {
		if (Math.abs(arr[start] - temp) >= value) {
			temp -= arr[start];
			++start;
			--i;

			range = Math.min(range, end - start);
		} else {
			++end;
			temp += arr[i];
		}
	}

	return range;
}

minSubarrayLen([2, 3, 1, 2, 4, 3], 7); // 2
minSubarrayLen([2, 1, 6, 5, 4], 9); // 2
minSubarrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1
minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubarrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubarrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0
