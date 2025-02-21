var maxConsecutiveAnswers = function (answerKey, k) {
    let maxLen = 0;
    let left = 0;
    let countF = 0;

    // Case 1: Try flipping "F" to "T"
    for (let right = 0; right < answerKey.length; right++) {
        if (answerKey[right] === 'F') countF++;

        while (countF > k) {
            if (answerKey[left] === 'F') countF--;
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    // Reset variables to check for flipping "T" to "F"
    left = 0;
    let countT = 0;

    for (let right = 0; right < answerKey.length; right++) {
        if (answerKey[right] === 'T') countT++;

        while (countT > k) {
            if (answerKey[left] === 'T') countT--;
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
