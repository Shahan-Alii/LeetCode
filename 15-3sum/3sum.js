/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {

    const res = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let l = i + 1;
        let r = nums.length - 1;


        while (l < r) {

            let sum = nums[l] + nums[r] + nums[i];

            if (sum == 0) {
                res.push([nums[i], nums[l], nums[r]]);

                
                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r - 1]) r--;

                l++;
                r--;

            }
            else if (sum > 0) {
                r--;
            } else {
                l++;
            }

        }


    }
    return res;
}
