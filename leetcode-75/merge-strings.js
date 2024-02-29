// 1768. Merge Strings Alternately
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let arr = [], i = 0;
    while (i < Math.max(word1.length, word2.length)){
        arr.push(word1[i], word2[i]);
        i++;
    }
    return arr.join('');
};

const case1 = mergeAlternately('abc', 'pqr'); // Expected: "apbqcr"
const case2 = mergeAlternately('ab', 'pqrs'); // Expected: "apbqrs"
const case3 = mergeAlternately('abcd', 'pq'); // Expected: "apbqcd"

console.log({case1, case2, case3});
