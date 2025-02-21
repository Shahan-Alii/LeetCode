/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {

    let max = 0;
    let l_true = 0;
    let l_false = 0;

    let count_true = 0;
    let count_false = 0;

    for (let right = 0; right < answerKey.length; right++) {

        if (answerKey[right] == "T") {
            count_true++;
        } else {
            count_false++;
        }

        while (count_false > k) {

            if (answerKey[l_true] == "F") {
                count_false--;
            }
            l_true++;

        }

        while (count_true > k) {

            if (answerKey[l_false] == "T") {
                count_true--;
            }
            l_false++;

        }

        max = Math.max(max, right - l_true + 1, right - l_false + 1);

    }

    return max;

};