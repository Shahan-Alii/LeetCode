var numSubarrayBoundedMax = function (nums, left, right) {
    function countSubarrays(bound) {
        let count = 0, subCount = 0;
        for (let num of nums) {
            if (num <= bound) {
                subCount++; 
                count += subCount; 
            } else {
                subCount = 0;
            }
        }
        return count;
    }

    return countSubarrays(right) - countSubarrays(left - 1);
};