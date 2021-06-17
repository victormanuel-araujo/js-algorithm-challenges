// Get some pointer on the array (as we called as pivot) and from that pointer, we will
// get how many numbers are smaller than the "pivot" and swap to the front of it
// after that we get the left and right and do the same 'til it's sorted

const swap = require('./swap');

function pivotHelper(arr, start = 0) {
	const pivot = start;
	let swapIndex = start;

	for (let i = start + 1; i < arr.length; i++) {
		if (arr[pivot] > arr[i]) {
			swapIndex += 1;
			swap(arr, i, swapIndex);
		}
	}

	swap(arr, pivot, swapIndex);

	return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		const middle = pivotHelper(arr, left);

		quickSort(arr, left, middle - 1);
		quickSort(arr, middle + 1, right);
	}

	return arr;
}

module.exports = quickSort;
