/*
231. Power of Two
*/

/*
Solution 1 -> O (logN)
1. multiply by 2 until bigger or equal to n
2. if n === val then is power of two

Solution 2 -> O(1)
0 = 0000
1 = 0001
2 = 0010
4 = 0100
8 = 1000
9 = 1001

So 2^n will always has single 1's
And other numbers has more 1's

4 =   0100
4-1 = 0011
4 & (4-1) = 0;
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  //return solution1(n);
  return solution2(n);
};

var solution2 = function(n) {
  if (n <= 0) return false;
  return (n & (n-1)) === 0;
}

var solution1 = function(n) {
  if (n === 1 || n === 2) return true;
  let val = 2;
  while (val < n) {
    val *= 2;
  }
  return val === n;
}




