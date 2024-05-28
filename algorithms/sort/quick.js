// O(nlogn), O(n2) - time
// O(logn), O(n) - space
// Choose a random pivot, place it to its correct index, handle left and right recursively

const quick_sort = (arr) => {
	if (arr.length <= 1) {
		return arr;
	}
	const pivot = arr[Math.floor(arr.length - 1)];
	const left = [];
	const right = [];
	for (let ele of arr) {
		if (ele < pivot) {
			left.push(ele);
		} else if (ele > pivot) {
			right.push(ele);
		}
	}
	return [...quick_sort(left), pivot, ...quick_sort(right)];
};

module.exports = { quick_sort };
