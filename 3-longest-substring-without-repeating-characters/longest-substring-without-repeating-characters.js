/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const window = new Set();
    let max = 0, start = 0;

    for (let end = 0; end < s.length; end++) {
        while (window.has(s[end])) {
            window.delete(s[start]);
            start++;
        }

        window.add(s[end]);
        max = Math.max(max, end - start + 1);
    }

    return max;
};