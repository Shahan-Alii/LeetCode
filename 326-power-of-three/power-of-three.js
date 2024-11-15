/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {

    if (n < 1) {
        return false;
    }

    var temp = 1;

    while (temp <= n) {
        if (temp == n) {
            return true;
        }

        temp *= 3;
    }
    return false;

};