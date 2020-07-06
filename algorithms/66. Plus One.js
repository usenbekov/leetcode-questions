/*
66. Plus One
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // [1,2,9]
  digits.reverse(); // [9,2,1]
  let carry = 1;
  for (let i = 0; i < digits.length; i++) {
    let val = digits[i] + carry;
    carry = 0;
    if (val > 9) {
      carry = 1;
      val -= 10;
    }
    digits[i] = val;
  }
  if (carry > 0) digits.push(carry);
  digits.reverse();
  return digits;
};


