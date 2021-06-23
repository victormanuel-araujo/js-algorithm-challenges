function fib(n) {
	if (fib.prototype.cache[n]) return fib.prototype.cache[n];
	if (n <= 2) return 1;

	const returnValue = fib(n - 1) + fib(n - 2);
	fib.prototype.cache[n] = returnValue;
	return returnValue;
}

fib.prototype.cache = {};
