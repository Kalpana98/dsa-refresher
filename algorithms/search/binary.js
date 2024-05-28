const { bubble_sort } = require('../sort/bubble');

// O(log n) - time
// O(1) - space

const binary_search = (arr, n) => {
	const sorted_arr = bubble_sort(arr);
	let start = 0;
	let end = sorted_arr.length - 1;
	for (; start <= end; ) {
		let mid = Math.floor((start + end) / 2);
		if (n === sorted_arr[mid]) {
			return true;
		} else if (n > mid) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	return false;
};

module.exports = { binary_search };
