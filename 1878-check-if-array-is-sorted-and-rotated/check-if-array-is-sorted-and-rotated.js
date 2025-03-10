/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let count = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            count++;
        }
    }

    // Check the wrap-around case (last element > first element)
    if (nums[nums.length - 1] > nums[0]) {
        count++;
    }

    // It should have at most one "break" to be a valid rotated sorted array
    return count <= 1;
};