/**
 * @param {number[]} A
 * @return {number}
 */
/*
1 3 5 7 9 11 1 3 5 7
1 -> 0
3 -> 0
5 -> 1 {1,3,5}
7 -> 2 {3,5,7} {1,3,5,7}
9 -> 3 {5,7,9} {3,5,7,9} {1,3,5,7,9}
11 > 4 {7,9,11} {5,7,9,11} {3,5,7,9,11} {1,3,5,7,9,11}
1 -> 0
3 -> 0
...
*/
var numberOfArithmeticSlices = function(A) {
  const dp = new Array(A.length).fill(0);
  let count = 0;
  for (let i = 2; i < A.length; i++) {
      if (A[i] - A[i-1] === A[i-1] - A[i-2]) {
          dp[i] = dp[i-1] + 1;
          count += dp[i];
      }
  }
  return count;
};

