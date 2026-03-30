/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {


    let map = {};
    let res = 0;
    let maj = 0;

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = 1 + (map[nums[i]] || 0);

        if (map[nums[i]] > maj) {

            maj = map[nums[i]];
            res = nums[i];
        }
    }

    return res;

};


