// O(n) - time
// O(1) - space

const linear_search = (arr, n) => {
	for (let ele of arr) {
		if (ele === n) {
			return true;
		}
	}
	return false;
};

module.exports = { linear_search };
