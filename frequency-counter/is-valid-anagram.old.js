// Write a function that can be accept two strings and compare if is a valid anagram

function isValidAnagram(fisrtStr, secondStr) {
	// Verify if they have the same length
	if (fisrtStr.length !== secondStr.length) {
		return false;
	}

	// Verify if they are empty
	if (fisrtStr.length === 0) {
		return true;
	}

	const fisrtStrFrequencyCounter = {};
	const secondStrFrequencyCounter = {};

	for (let char of fisrtStr) {
		fisrtStrFrequencyCounter[char] = ++fisrtStrFrequencyCounter[char] || 1;
	}

	for (let char of secondStr) {
		secondStrFrequencyCounter[char] = ++secondStrFrequencyCounter[char] || 1;
	}

	// Count the letters and check if matches and return the match result
	for (let char in fisrtStrFrequencyCounter) {
		if (fisrtStrFrequencyCounter[char] !== secondStrFrequencyCounter[char]) {
			return false;
		}
	}

	return true;
}

isValidAnagram('', ''); // true
isValidAnagram('aaz', 'zza'); // false
isValidAnagram('anagram', 'nagaram'); // true
isValidAnagram('rat', 'car'); // false
isValidAnagram('awesome', 'awesom'); // false
isValidAnagram('qwerty', 'qeywrt'); // true
isValidAnagram('texttwisttime', 'timetwisttext'); // true
