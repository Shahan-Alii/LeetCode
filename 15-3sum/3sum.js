/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  nums.sort((a, b) => a - b);          // 1 . sort the array
  const res = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate anchors

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);

        // skip duplicates for left & right
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;                      // need a larger sum
      } else {
        right--;                     // need a smaller sum
      }
    }
  }
  return res;
}
