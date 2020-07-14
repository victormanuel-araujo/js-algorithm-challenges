// Write a function that receives two numbers and compare if they have the same frequency

function sameFrequency(firstNum, secondNum) {
	// Receive two numbers and check their frequency
	const lookup = {};

	for (let num of String(firstNum)) {
		lookup[num] = ++lookup[num] || 1;
	}

	for (let num of String(secondNum)) {
		if (!lookup[num]) {
			return false;
		} else {
			lookup[num]--;
		}
	}

	return true;
}

sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false
