/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const size = digits.length - 1;
    let output = "";
    let carry = 1;
    for (let i = size; i >= 0; i--) {
        let sum = carry + digits[i];
        carry = Math.floor(sum / 10);
        output = `${output}${sum % 10}`
    }
    if (carry) {
        output = `${output}${carry}`
    }
    return output.split("").reverse();
};