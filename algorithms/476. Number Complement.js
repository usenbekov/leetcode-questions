/*
476. Number Complement
*/

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  if (num === 0) return 1;
  let complement = num;
  let mask = 1;
  while (num) {
    complement ^= mask;
    num >>= 1;
    mask <<= 1;
  }
  return complement;
};


