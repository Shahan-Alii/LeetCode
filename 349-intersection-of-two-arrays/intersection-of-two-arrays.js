var intersection = function (nums1, nums2) {
    let map = new Map();
    let result = [];

    // Store all elements of nums1 in a HashMap
    for (let num of nums1) {
        map.set(num, 1); // Store unique elements only
    }

    // Iterate through nums2 and check for common elements
    for (let num of nums2) {
        if (map.has(num)) {
            result.push(num);
            map.delete(num); // Ensure uniqueness by deleting after adding
        }
    }

    return result;
};