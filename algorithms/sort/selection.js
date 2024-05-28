// O(n2) - quadratic time
// O(1) - space
// Compare ith with min and swap

const selection_sort = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[i]) {
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
		}
	}
	return arr;
};

module.exports = { selection_sort };
