/*
201. Bitwise AND of Numbers Range

Given a range [m, n] where 0 <= m <= n <= 2147483647,
return the bitwise AND of all numbers in this range, inclusive.

Example 1:

Input: [5,7]
Output: 4
Example 2:

Input: [0,1]
Output: 0
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/*
m = 22, n = 31
22 -> 0001 | 0110
23 -> 0001 | 0111
24 -> 0001 | 1000
*/
var rangeBitwiseAnd = function(m, n) {
  let counter = 0;
  while (m !== n) {
    m >>= 1;
    n >>= 1;
    counter++;
  }
  return m << counter;
};


