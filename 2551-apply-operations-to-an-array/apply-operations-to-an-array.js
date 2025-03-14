/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {

    let left = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] == nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;

        }

    }



    for (let i = 0; i < nums.length ; i++) {

        if (nums[i] != 0) {

            temp = nums[left];
            nums[left++] = nums[i];
            nums[i] = temp;
        }

    }

    return nums;
};