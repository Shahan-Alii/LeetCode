/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {


    var max = 0;
    var start = 0;
    var count0 = 0;

    for (let end = 0; end < nums.length; end++) {

        if (nums[end] == 0) count0++;

        while (count0 > k) {

            if (nums[start] == 0) count0--;

            start++;

        }

        max = Math.max(max, end - start + 1);

    }

    return max;
};