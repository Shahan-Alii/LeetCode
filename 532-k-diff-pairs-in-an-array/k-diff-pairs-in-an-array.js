/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {

    if (k < 0) return 0;

    let map = new Map();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let count = 0;
    for (let [num, freq] of map) {
        if (k === 0) {
            if (freq > 1) count++;
        } else {
            if (map.has(num + k)) count++;
        }
    }
    return count;

};