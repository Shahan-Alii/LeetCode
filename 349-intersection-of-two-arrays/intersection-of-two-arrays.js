var intersection = function (nums1, nums2) {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1]; // Swap to use smaller array for HashMap

    let map = new Map();
    let result = [];

    for (let num of nums1) {
        map.set(num, 1);
    }

    for (let num of nums2) {
        if (map.has(num)) {
            result.push(num);
            map.delete(num); // Prevent duplicates
        }
        if (result.length === nums1.length) break; // Early exit optimization
    }

    return result;
};
