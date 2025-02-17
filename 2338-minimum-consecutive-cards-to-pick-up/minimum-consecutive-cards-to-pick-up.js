/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
    let window = new Set();
    let left = 0;
    let min = Infinity;

    for (let right = 0; right < cards.length; right++) {
        while (window.has(cards[right])) {
            min = Math.min(min, right - left + 1);
            window.delete(cards[left]);
            left++;
        }
        window.add(cards[right]);
    }

    return min === Infinity ? -1 : min;
};
