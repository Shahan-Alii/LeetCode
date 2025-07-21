var strStr = function (haystack, needle) {
    if (needle === "") return 0;

    let count = 0;
    let n = needle.length;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[count]) {
            count++;
        } else {
            // If mismatch happens, we need to backtrack
            // Re-check from the current i - count + 1
            i = i - count;
            count = 0;
        }

        if (count === n) {
            return i - n + 1;
        }
    }

    return -1;
};
