function swap(arr, index, index2) {
	const temp = arr[index];
	arr[index] = arr[index2];
	arr[index2] = temp;
}

module.exports = swap;
