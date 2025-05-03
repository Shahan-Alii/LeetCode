var minDominoRotations = function(tops, bottoms) {
    const check = (target) => {
        let topRotations = 0;
        let bottomRotations = 0;

        for (let i = 0; i < tops.length; i++) {
            if (tops[i] !== target && bottoms[i] !== target) {
                return Infinity;
            } else if (tops[i] !== target) {
                topRotations++;
            } else if (bottoms[i] !== target) {
                bottomRotations++;
            }
        }

        return Math.min(topRotations, bottomRotations);
    };

    const candidate1 = tops[0];
    const candidate2 = bottoms[0];

    const res = Math.min(check(candidate1), candidate1 !== candidate2 ? check(candidate2) : Infinity);
    return res === Infinity ? -1 : res;
};
