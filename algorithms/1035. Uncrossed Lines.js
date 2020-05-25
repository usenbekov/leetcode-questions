/*
1035. Uncrossed Lines
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
/*
  1 4 2 3
1 1 1 1 1
2 1 1 2 2
4 1 2 2 2
3 1 2 2 3
if match left_top+1
else max(left, top)

  1,3,7,1,7,5
1 1 1 1 1 1 1
9 1 1 1 1 1 1
2 1 1 1 1 1 1
5 1 1 1 1 1 2
1 2 2 2 2 2 2

  3,2
3 1 1
3 1 1
3 1 1
*/
var maxUncrossedLines = function(A, B) {
  const dp = [];
  for (let i = 0; i < B.length; i++) {
    dp.push([]);
    for (let j = 0; j < A.length; j++) {
      if (B[i] === A[j]) {
        dp[i][j] = 1 + (i<1 ? 0 : dp[i-1][j-1]||0);
      } else {
        dp[i][j] = Math.max((i<1?0:dp[i-1][j])||0, dp[i][j-1]||0);
      }
    }
  }
  return Math.min(dp[B.length-1][A.length-1]);
};


