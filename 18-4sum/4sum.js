/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);


    let res = [];

    for (let i = 0; i < nums.length - 1; i++) {

        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < nums.length - 1; j++) {


            if (j > i + 1 && nums[j] == nums[j - 1]) {
                continue;
            }


            let left = j + 1;
            let right = nums.length - 1;


            while (left < right) {

                let sum = nums[left] + nums[right] + nums[i] + nums[j];

                if (sum == target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;


                    // skip duplicates for left
                    while (left < right && nums[left] === nums[left - 1]) left++;
                    // skip duplicates for right
                    while (left < right && nums[right] === nums[right + 1]) right--;
                }
                else if (sum < target) {
                    left++;
                } else {
                    right--;
                }


            }



        }

    }

    return res;

};