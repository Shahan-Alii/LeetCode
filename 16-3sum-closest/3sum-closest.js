/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {


    let min = Infinity;
    let min_sum = 0;

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            for (let k = j + 1; k < nums.length; k++) {

                let sum = nums[i] + nums[j] + nums[k];
                let diff = Math.abs(sum - target);

                if (diff < min) {
                    min = diff;
                    min_sum = sum;
                }

            }
        }

    }
    return min_sum;


};