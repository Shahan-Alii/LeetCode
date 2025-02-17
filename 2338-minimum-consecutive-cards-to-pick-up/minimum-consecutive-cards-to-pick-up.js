/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
    let indexMap = new Map();
    let min = Infinity;

    for (let right = 0; right < cards.length; right++) {
        if (indexMap.has(cards[right])) {
            let left = indexMap.get(cards[right]);
            min = Math.min(min, right - left + 1);
        }
        indexMap.set(cards[right], right); // Update index of the card
    }

    return min === Infinity ? -1 : min;
};
