/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {

    var max = 0;

    var start = 0;

    var window = new Map();

    for (let end = 0; end < fruits.length; end++) {

        window.set(fruits[end], (window.get(fruits[end]) || 0) + 1);

        while (window.size > 2) {

            if (window.get(fruits[start]) > 1) {
                window.set(fruits[start], window.get(fruits[start]) - 1);
            } else {
                window.delete(fruits[start]);
            }

            start++;

        }

        max = Math.max(max, end - start + 1);


    }

    return max;

};