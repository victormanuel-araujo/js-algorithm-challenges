// Create a function that receives a sorted array of number and return the
// count of unique numbers

function countUniqueValues(arr) {
	let total = 0;
	let nextValue;

	for (let i = 0; i < arr.length; i++) {
		const currentValue = arr[i];
		if (currentValue !== nextValue) {
			total++;
			nextValue = currentValue;
		}
	}

	return total;
}

countUniqueValues([1, 1, 1, 1, 1, 2]);
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
countUniqueValues([]);
countUniqueValues([-2, -1, -1, 0, 1]);
