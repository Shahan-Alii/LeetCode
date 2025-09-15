var numberOfSubarrays = function(nums, k) {
    return countSubarrays(nums, k) - countSubarrays(nums, k - 1);
};

function countSubarrays(nums, k) {
    let  start = 0, res = 0;

    for (let end = 0; end < nums.length; end++) {
        if (nums[end] % 2 !== 0) k--;

        while (k < 0) {
            if (nums[start] % 2 !== 0) k++;
            start++;
        }

        res += end - start + 1;
    }

    return res;
}