// O(n2) - quadratic time
// O(1) - space
// Compare adjacents and push max to last in every iteration

// const bubble_sort = (arr) => {
// 	for (let i = 0; i < arr.length - 1; i++) {
// 		for (let j = 0; j < arr.length - 1 - i; j++) {
// 			if (arr[j] > arr[j + 1]) {
// 				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
// 			}
// 		}
// 	}
// 	return arr;
// };

const bubble_sort = (arr) => {
	let swapped;
	do {
		swapped = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				swapped = true;
			}
		}
	} while (swapped);
	return arr;
};

module.exports = { bubble_sort };
