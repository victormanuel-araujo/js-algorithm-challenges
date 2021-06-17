// Insertion sort loops through the array from the second index and for each element it check
// if the before value is smaller, while it's not, then keep going adding the
// current value to the next index (current + 1), else it puts the value on the index that it paused on

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		const currentItem = arr[i];

		for (var j = i; j >= 0 && currentItem > arr[j]; j--) {
			arr[j + 1] = arr[j];
		}

		arr[j] = currentItem;
	}

	return arr;
}

module.exports = insertionSort;
