// Write a function that receives several arguments and lookup if have a duplicate value

function areThereDuplicates(...args) {
	const lookup = {};

	for (let i = 0; i < args.length; i++) {
		if (lookup[args[i]]) {
			return true;
		}
	}

	return false;
}

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates('a', 'b', 'c', 'a'); // true
