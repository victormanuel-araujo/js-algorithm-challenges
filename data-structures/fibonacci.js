// Memoization
function fibMemo(n) {
	if (fibMemo.prototype.cache[n]) return fibMemo.prototype.cache[n];
	if (n <= 2) return 1;

	const returnValue = fibMemo(n - 1) + fibMemo(n - 2);
	fibMemo.prototype.cache[n] = returnValue;
	return returnValue;
}

fibMemo.prototype.cache = {};

// Tabulation - Better space complexity
function fiboTabulation(n) {
	if (n <= 2) return 1;
	const fibNums = [0, 1, 1];

	for (let i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}

	return fibNums[n];
}
