// Loop through the array and get the minimun value, if it's not different from the first loop index, then swap

const swap = require('./swap');

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		var minimumIndex = i;
		for (let j = i; j < arr.length; j++) {
			if (arr[j] < arr[minimumIndex]) minimumIndex = j;
		}

		if (minimumIndex === i) {
			swap(arr, i, minimumIndex);
		}
	}

	return arr;
}

module.exports = selectionSort;
