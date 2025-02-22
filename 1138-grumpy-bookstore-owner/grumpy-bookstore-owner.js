var maxSatisfied = function (customers, grumpy, minutes) {
    let alwaysSatisfied = 0;
    let extraSatisfied = 0;
    let maxExtraSatisfied = 0;

    for (let i = 0; i < customers.length; i++) {
        // Add customers who are always satisfied
        if (grumpy[i] == 0) {
            alwaysSatisfied += customers[i];
        }

        // Sliding window: track extra satisfied customers
        if (grumpy[i] == 1) {
            extraSatisfied += customers[i];
        }

        // Shrink the window when it exceeds 'minutes'
        if (i >= minutes && grumpy[i - minutes] == 1) {
            extraSatisfied -= customers[i - minutes];
        }

        // Track max extra customers we can save
        maxExtraSatisfied = Math.max(maxExtraSatisfied, extraSatisfied);
    }

    return alwaysSatisfied + maxExtraSatisfied;
};
