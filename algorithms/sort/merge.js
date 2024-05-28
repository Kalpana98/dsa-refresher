// O(nlogn) - quasilinear time
// O(n) - space
// Divide & Conquer

const merge_sort = (arr) => {
	if (arr.length <= 1) {
		return arr;
	}
	const mid = Math.floor(arr.length / 2);

	return merge(merge_sort(arr.slice(0, mid)), merge_sort(arr.slice(mid)));
};

const merge = (leftArr, rightArr) => {
	const result = [];
	while (leftArr.length && rightArr.length) {
		if (leftArr[0] <= rightArr[0]) {
			result.push(leftArr.shift());
		} else {
			result.push(rightArr.shift());
		}
	}
	return [...result, ...leftArr, ...rightArr];
};

module.exports = { merge_sort };
