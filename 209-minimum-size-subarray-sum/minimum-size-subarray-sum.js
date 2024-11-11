/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {


    var minLength = Infinity;
    var windowSum = 0;
    var start = 0;


    for (var i = 0; i < nums.length; i++) {

        windowSum += nums[i];

        while (windowSum >= target) {

            minLength = Math.min(minLength, i - start + 1);

            windowSum -= nums[start];
            start++;

        }



    }

    return minLength === Infinity ? 0 : minLength; 

};