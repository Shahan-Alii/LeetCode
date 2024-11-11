/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {


    var minLength = Infinity;
    var windowSum = 0;
    var start = 0;


    for (var right = 0; right < nums.length; right++) {

        windowSum += nums[right];

        while (windowSum >= target) {

            minLength = Math.min(minLength, right - start + 1);

            windowSum -= nums[start];
            start++;

        }



    }

    return minLength === Infinity ? 0 : minLength;

};