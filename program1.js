/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const dictionary = {
        "(":")",
        "{":"}",
        "[":"]"
        }
    const stack = [];
    for (let i =0; i< s.length; i++) {
        let currentBracket = s[i]; 
        let lastBracket = stack[stack.length-1]; 
        if (currentBracket in dictionary) {
            stack.push(dictionary[currentBracket])
            continue;
        }
        if (currentBracket === lastBracket ) {
            stack.pop();
            continue;
        }
        return false;
    }
    return !stack.length;
};

module.exports = { isValid };


