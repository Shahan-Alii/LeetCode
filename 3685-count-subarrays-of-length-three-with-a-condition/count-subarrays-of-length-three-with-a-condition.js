var countSubarrays = function(nums) {
    let count = 0;
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i-1] + nums[i+1] === nums[i] / 2) {
            count++;
        }
    }
    return count;
};