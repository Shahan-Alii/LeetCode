/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {



    let window = new Map();

    for (let i = 0; i < nums.length && i <= k; i++) {

        window.set(nums[i], (window.get(nums[i]) || 0) + 1);

        if (window.get(nums[i]) > 1) {
            return true;
        }
    }

    for (let i = 0; i < nums.length - k; i++) {

        window.set(nums[i], window.get(nums[i]) - 1);

        window.set(nums[i + k + 1], (window.get(nums[i + k + 1]) || 0) + 1);

        if (window.get(nums[i + k + 1]) > 1) {
            return true;
        }

    }

    return false;


};
