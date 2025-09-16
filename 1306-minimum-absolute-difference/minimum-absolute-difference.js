/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {

    arr.sort((a, b) => a - b)

    let res = [];
    let min_diff = Infinity;

    for (let i = 1; i < arr.length; i++) {
        let prev = arr[i - 1];
        let current = arr[i];

        if (current - prev < min_diff) {
            min_diff = current - prev
        }
    }

    for (let i = 1; i < arr.length; i++) {
        let prev = arr[i - 1];
        let current = arr[i];

        if (current - prev == min_diff) {
            res.push([prev, current]);
        }
    }

    return res;


};