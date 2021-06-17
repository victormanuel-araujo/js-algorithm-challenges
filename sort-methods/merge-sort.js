// My favourite
// Merge sort breaks the array recursively until has only a one length array and starts to merge those arrays
// to work, you get a middle index on the array and breaks in left and right, then merge it back sorting

function merge(arr1 = [], arr2 = []) {
	const mergedArr = [];
	let firstArrIndex = 0,
		secondArrayIndex = 0;

	while (firstArrIndex < arr1.length && secondArrayIndex < arr2.length) {
		if (arr1[firstArrIndex] < arr2[secondArrayIndex]) {
			mergedArr.push(arr1[firstArrIndex]);
			firstArrIndex++;
			continue;
		}

		mergedArr.push(arr2[secondArrayIndex]);
		secondArrayIndex++;
	}

	while (firstArrIndex < arr1.length) {
		mergedArr.push(arr1[firstArrIndex]);
		firstArrIndex++;
	}

	while (secondArrayIndex < arr2.length) {
		mergedArr.push(arr2[secondArrayIndex]);
		secondArrayIndex++;
	}

	return mergedArr;
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	const middle = ~~(arr.length / 2);
	const left = mergeSort(arr.slice(0, middle));
	const right = mergeSort(arr.slice(middle));

	return merge(left, right);
}

module.exports = mergeSort;
