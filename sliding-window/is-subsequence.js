// Write a function that will receive two strings and compare if they are subsequence

function isSubSequence(str, compareStr) {
	let count = 0,
		next = 0;

	for (let char of compareStr) {
		if (str[count] === char) {
			count++;
		}

		next++;
	}

	return count === str.length;
}

isSubSequence('hello', 'hello world'); // true
isSubSequence('sing', 'sting'); // true
isSubSequence('abc', 'abracadabra'); // true
isSubSequence('abc', 'acb'); // false
