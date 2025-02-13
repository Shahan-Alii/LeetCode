/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
    let numStr = num.toString(); // Convert number to string
    let res = 0;

    if (numStr.length < k) return 0;

    for (let i = 0; i <= numStr.length - k; i++) { // Fix loop condition
        let window = parseInt(numStr.slice(i, i + k)); // Extract substring and convert to number

        if (window !== 0 && num % window === 0) { // Avoid division by zero
            res++;
        }
    }

    return res;

};