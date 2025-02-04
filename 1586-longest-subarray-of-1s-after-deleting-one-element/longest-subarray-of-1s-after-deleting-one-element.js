/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {

    var max = 0;
    var count0 = 0;
    var count1 = 0;

    var start = 0;

    for (var end = 0; end < nums.length; end++) {

        if (nums[end] == 0) {
            count0++;
        }


        while (count0 > 1) {

            if (nums[start] == 0) {
                count0--;
            }
            start++;

        }
        max = Math.max(max, end - start)

    }

    return max;

};