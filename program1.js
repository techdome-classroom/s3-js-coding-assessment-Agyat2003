/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let n = s.length;
    if (n % 2 !== 0) return false;

    let stack = [];
    
    for (let i = 0; i < n; i++) {
        let c = s[i];
        if (c === '(') stack.push(')');
        else if (c === '[') stack.push(']');
        else if (c === '{') stack.push('}');
        else if (stack.length === 0 || c !== stack.pop()) return false;
    }

    return stack.length === 0;
};

module.exports = { isValid };


