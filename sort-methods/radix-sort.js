// Radix sort works basically with numbers in any base, but this sort method loops through the array of numbers
// and start to sort from buckets, which is a array of arrays, from 0 to the base (10 as default)
// and for each digit they will be added on the bucket for their respective digit on the current length

function getDigit(num, digit) {
	return Number(String(num)[digit]) || 0;
}

function getLength(num) {
	return String(num).length;
}

function getLargestNumber(arr) {
	return getLength(Math.max(...arr));
}

function radixSort(arr) {
	const largestLength = getLargestNumber(arr);

	for (let i = 0; i < largestLength; i++) {
		const bucket = Array.from({length: 10}, () => []);

		for (let k = 0; k < arr.length; k++) {
			bucket[getDigit(arr[k], i)].push(arr[k]);
		}

		arr = [].concat(...bucket);
	}

	return arr;
}
