var merge = function (intervals) {
    let sorted = intervals.sort((a, b) => a[0] - b[0]);

    let res = [];
    let current = sorted[0]; // start with the first interval

    for (let i = 1; i < sorted.length; i++) {
        if (current[1] >= sorted[i][0]) {
            // merge
            current[1] = Math.max(current[1], sorted[i][1]);
        } else {
            // no overlap → push current and move on
            res.push(current);
            current = sorted[i];
        }
    }

    // push the last interval
    res.push(current);

    return res;
};
