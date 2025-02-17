/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {

    return countAtMax(nums, goal) - countAtMax(nums, goal - 1)

};

function countAtMax(nums, goal) {
    
    let left = 0;
    let window = 0;
    let count = 0;

    for (let right = 0; right < nums.length; right++) {

        window += nums[right];

        while (window > goal && left<=right) {
            window -= nums[left];
            left++;
        }
        count += right - left + 1;

    }

    return count;


}