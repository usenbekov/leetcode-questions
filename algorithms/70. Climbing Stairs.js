/**
 * @param {number} n
 * @return {number}
 */
/*
1 -> 1 {1}
2 -> 2 {1,2}, {2}
3 -> 3 {1,2,3}, {2,3}, {1,3}
4 -> 5 {1,2,3,4}, {1,3,4}, {2,3,4}, {1,2,4}, {2,4}

Fn = F(n-1) + F(n-2)
*/
var climbStairs = function(n) {
  const dp = [1, 2];
  for (let i = 2; i < n; i++) {
      dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n-1];
};

