const log = console.log;
const { linear_search } = require('./search/linear');
const { binary_search } = require('./search/binary');
const { bubble_sort } = require('./sort/bubble');
const { selection_sort } = require('./sort/selection');
const { insertion_sort } = require('./sort/insertion');
const { merge_sort } = require('./sort/merge');
const { quick_sort } = require('./sort/quick');

// Searching
const arr1 = ['a', 'b', 0, 'jkl', 'ab', 100];
log('Linear 1', linear_search(arr1, 0));
log('Linear 2', linear_search(arr1, 'abc'));

const arr2 = [100, 1, 5, 0, 20, 45, 30];
log('Binary 1', binary_search(arr2, 0));
log('Binary 2', binary_search(arr2, 1000));

log('Bubble', bubble_sort(arr2));

log('Selection', selection_sort(arr2));

log('Insertion', insertion_sort(arr2));

log('Merge', merge_sort(arr2));

log('Quick', quick_sort(arr2));
