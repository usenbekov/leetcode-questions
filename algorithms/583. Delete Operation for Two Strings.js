/*
583. Delete Operation for Two Strings
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
/*
  # s e a
# 0 1 2 3
e 1 2 1 2
a 2 3 2 1
t 3 4 3 2
*/
var minDistance = function(word1, word2) {
  const dp = [];
  for (let i = 0; i <= word1.length; i++) {
    dp.push([i]);
    for (let j = 1; j <= word2.length; j++) {
      if (i === 0) dp[i][j] = j;
      else if (word1[i-1] === word2[j-1]) {
        dp[i][j] = dp[i-1][j-1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i][j-1], dp[i-1][j]);
      }
    }
  }
  return dp[word1.length][word2.length];
};


