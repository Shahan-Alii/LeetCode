/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let start = 0;
    let maxLength = 0;

    let expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        const length = right - left - 1; // because left and right overexpanded by 1
        if (length > maxLength) {
            start = left + 1;
            maxLength = length;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);     // odd length
        expandAroundCenter(i, i + 1); // even length
    }

    return s.substring(start, start + maxLength);
};
