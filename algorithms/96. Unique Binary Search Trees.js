/*
96. Unique Binary Search Trees
*/

/*
1: 1

1, 2 : 2
1      2
 \    /
  2   1

1, 2, 3 : 5

F(1,n) = G(i-1) * G(n-i)

G = [1, 1]
G[2]= G[0]*G[1] + G[1]*G[0] = 2
G = [1, 1, 2]
G[3]= G[0]*G[2] + G[1]*G[1] + G[2]*G[0] = 2 + 1 + 2 = 5

*/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = 0;
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j-1] * dp[i-j];
    }
  }
  return dp[n];
};



