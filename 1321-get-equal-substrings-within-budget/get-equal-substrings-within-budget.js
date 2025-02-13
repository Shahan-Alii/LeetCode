/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {

    let left = 0, right = 0, cost = 0, maxLen = 0;

    while (right < s.length) {
        cost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));

        while (cost > maxCost) {
            cost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
            left++; // Shrink window from the left
        }

        maxLen = Math.max(maxLen, right - left + 1);
        right++; // Expand window to the right
    }

    return maxLen;



};