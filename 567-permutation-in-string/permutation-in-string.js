/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */


function mapsAreEqual(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (let [key, value] of map1) {
        if (map2.get(key) !== value) return false;
    }
    return true;
}

var checkInclusion = function (s1, s2) {


    let window = new Map();
    let patMap = new Map();
    let count = 0;
    let k = s1.length;

    // Initialize pattern frequency map
    for (let i = 0; i < k; i++) {
        patMap.set(s1[i], (patMap.get(s1[i]) || 0) + 1);
    }

    // Initialize window frequency map
    for (let i = 0; i < k; i++) {
        window.set(s2[i], (window.get(s2[i]) || 0) + 1);
    }

    // Check if initial window matches pattern
    if (mapsAreEqual(window, patMap)) return true;

    // Sliding window processing
    for (let i = k; i < s2.length; i++) {
        // Add new character to window
        window.set(s2[i], (window.get(s2[i]) || 0) + 1);

        // Remove leftmost character from window
        if (window.get(s2[i - k]) === 1) {
            window.delete(s2[i - k]); // Remove if count becomes zero
        } else {
            window.set(s2[i - k], window.get(s2[i - k]) - 1);
        }

        // Check if updated window matches pattern
        if (mapsAreEqual(window, patMap)) return true;;
    }

    return false;

};