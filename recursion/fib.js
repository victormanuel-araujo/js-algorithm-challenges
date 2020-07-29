// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8,
// ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(num) {
	if (!num) return -1;
	let value = 1;

	function helper(previous, current) {
		if (num === 0) return;

		num -= 1;
		value = previous;
		helper(current, current + previous);
	}

	helper(1, 1);
	return value;
}
