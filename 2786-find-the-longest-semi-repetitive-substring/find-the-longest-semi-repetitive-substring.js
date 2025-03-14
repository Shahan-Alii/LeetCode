/**
 * @param {string} s
 * @return {number}
 */
var longestSemiRepetitiveSubstring = function (s) {

    if (s.length == 1) { return 1 }

    let max = 0;
    let count = 0;

    let left = 0;

    for (let right = 1; right < s.length; right++) {

        if (s[right] == s[right - 1]) {
            count++;
        }

        while (count > 1) {

            if (s[left] == s[left + 1]) {
                count--;
            }
            left++;

        }

        max = Math.max(max, right - left + 1)


    }
    return max;

};