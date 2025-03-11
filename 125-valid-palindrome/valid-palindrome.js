/**
 * @param {string} s
 * @return {boolean}
 */

function isAlphanumeric(char) {
    return /[a-zA-Z0-9]/.test(char);
}

var isPalindrome = function (s) {
    let start = 0, end = s.length - 1;

    while (start < end) {
        while (start < end && !isAlphanumeric(s[start])) start++;
        while (start < end && !isAlphanumeric(s[end])) end--;

        if (s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false;
        }

        start++;
        end--;
    }

    return true;
};