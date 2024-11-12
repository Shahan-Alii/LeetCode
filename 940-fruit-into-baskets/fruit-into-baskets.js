/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {

    var max = 0;

    var start = 0;

    var fruitMap = new Map();


    for (let end = 0; end < fruits.length ; end++) {

        var currentFruit = fruits[end];

        fruitMap.set(currentFruit, (fruitMap.get(currentFruit) || 0) + 1);

        while (fruitMap.size > 2) {

            var startFruit = fruits[start];

             fruitMap.set(startFruit, fruitMap.get(startFruit) - 1);

            if (fruitMap.get(startFruit) == 0) {
                fruitMap.delete(startFruit)
            }

            start++;

        }

        max = Math.max(max, end - start + 1);

    }

    return max;

};