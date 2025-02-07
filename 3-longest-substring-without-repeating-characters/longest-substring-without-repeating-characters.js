/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    const window = new Map();

    let max = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {

        window.set(s[end], (window.get(s[end]) || 0) + 1);

        while (window.get(s[end]) > 1) {

            window.set(s[start], window.get(s[start]) - 1);
            start++;

        }

        max = Math.max(max, end - start + 1);

    }

    return max;


};