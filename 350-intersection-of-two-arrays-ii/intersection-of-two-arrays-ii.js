/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {


    if (nums1.length > nums2.length) return intersect(nums2, nums1); // Ensure nums1 is smaller

    let map = new Map();
    let result = [];

    // Store frequencies of nums1 elements
    for (let num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Check intersection with nums2
    for (let num of nums2) {
        if (map.has(num) && map.get(num) > 0) {
            result.push(num);
            map.set(num, map.get(num) - 1);
        }
    }

    return result;
};