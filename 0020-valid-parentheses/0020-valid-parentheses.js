/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = new Map([["(", ")"], ["{", "}"], ["[", "]"]]);
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if(["{", "[", "("].includes(s[i])) {
           stack.push(s[i]);
        } else {
            const top = stack.pop();
            if (map.get(top) !== s[i]) {
                return false;
            }
        }
    }
   return stack.length === 0;
};