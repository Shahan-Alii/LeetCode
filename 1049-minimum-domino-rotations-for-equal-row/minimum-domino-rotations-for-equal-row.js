var minDominoRotations = function (tops, bottoms) {
    let res = Infinity;

    for (let v = 1; v <= 6; v++) {
        let top_shifts = 0;
        let bottom_shifts = 0;
        let flag = true;

        for (let i = 0; i < tops.length; i++) {
            if (tops[i] !== v && bottoms[i] !== v) {
                flag = false;
                break;
            } else if (tops[i] !== v) {
                top_shifts++;
            } else if (bottoms[i] !== v) {
                bottom_shifts++;
            }
        }

        if (flag) {
            res = Math.min(res, top_shifts, bottom_shifts);
        }
    }

    return res === Infinity ? -1 : res;
};
