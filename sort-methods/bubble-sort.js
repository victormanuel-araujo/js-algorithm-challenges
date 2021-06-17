// Bubble sort loops two times, which the first loop goes all the way through the array and the second goes
// starting on the current, then if the first loop index is bigger than the second, it swaps, making sure
// that the first loop indexes gets sorted as they swap

const swap = require('./swap');

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let swipped = false;

		for (let j = i; j < arr.length; j++) {
			if (arr[j] < arr[i]) {
				swipped = true;
				swap(arr, i, j);
			}
		}

		if (!swipped) break;
	}

	return arr;
}

module.exports = bubbleSort;
