// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(nums) {
	if (!nums || nums.length === 0) return null;
	const num = nums[0];
	return num * (productOfArray(nums.slice(1)) || 1);
}
