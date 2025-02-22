var maxSatisfied = function (customers, grumpy, minutes) {
    let alwaysSatisfied = 0;
    let extraSatisfied = 0;
    let maxExtraSatisfied = 0;

    // Calculate customers always satisfied
    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] == 0) {
            alwaysSatisfied += customers[i];
        }
    }

    // Sliding window to find max extra satisfied customers
    for (let i = 0; i < minutes; i++) {
        if (grumpy[i] == 1) {
            extraSatisfied += customers[i];
        }
    }

    maxExtraSatisfied = extraSatisfied;

    for (let right = minutes; right < customers.length; right++) {
        if (grumpy[right] == 1) {
            extraSatisfied += customers[right];
        }
        if (grumpy[right - minutes] == 1) {
            extraSatisfied -= customers[right - minutes];
        }

        maxExtraSatisfied = Math.max(maxExtraSatisfied, extraSatisfied);
    }

    return alwaysSatisfied + maxExtraSatisfied;
};