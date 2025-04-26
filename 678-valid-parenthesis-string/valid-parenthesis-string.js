var checkValidString = function(s) {
    let leftBalance = 0;
    let rightBalance = 0;
    
    // Left to right pass: treat '*' as '('
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '*') {
            leftBalance++;
        } else {
            leftBalance--;
        }
        if (leftBalance < 0) {
            return false; // Too many ')' or unmatched ')'
        }
    }
    
    // Right to left pass: treat '*' as ')'
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ')' || s[i] === '*') {
            rightBalance++;
        } else {
            rightBalance--;
        }
        if (rightBalance < 0) {
            return false; // Too many '(' or unmatched '('
        }
    }
    
    return true;
};
