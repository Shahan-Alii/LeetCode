/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {


    nums.sort((a, b) => a - b)

    let min = Infinity;
    let min_sum = 0;

    for (let i = 0; i < nums.length - 2; i++) {

        let left = i + 1; let right = nums.length - 1;

        while (left < right) {



            let sum = nums[left] + nums[right] + nums[i];

            if (sum == target) {
                return sum;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }

            let diff = Math.abs(sum - target);
            if (diff < min) {
                min = diff;
                min_sum = sum;
            }

        }


    }
    return min_sum;


};