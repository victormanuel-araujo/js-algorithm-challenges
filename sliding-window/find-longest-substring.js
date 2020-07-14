// Write a function that receives a string and return the longest substring length with distinct letters

function findLongestSubstring(value) {
	let temp = '',
		range = 0;

	for (let i = 0; i < value.length; i++) {
		const charIndex = temp.indexOf(value[i]);

		if (charIndex < 0) {
			temp += value[i];
		} else {
			range = Math.max(temp.length, range);
			temp = temp.substring(charIndex + 1, i);
			--i;
		}
	}

	range = Math.max(temp.length, range);
	return range;
}

findLongestSubstring(''); // 0
findLongestSubstring('rithmschool'); // 7
findLongestSubstring('thisisawesome'); // 6
findLongestSubstring('thecatinthehat'); // 7
findLongestSubstring('bbbbbbb'); // 1
findLongestSubstring('thisishowwedo'); // 6
findLongestSubstring('longestsubstring'); // 8
