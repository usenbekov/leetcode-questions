/*
72. Edit Distance
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
/*
  # h o r s e
# 0 1 2 3 4 5
r 1 1 2 2 3 4
o 2 3 1 2 3 4
s 3 3 2 2 2 3
*/
var minDistance = function(word1, word2) {
  const dp = [];
  for (let i = 0; i < word2.length+1; i++) {
    dp[i] = [i];
    for (let j = 1; j < word1.length+1; j++) {
      if (i === 0) dp[i].push(j);
      else if (word2[i-1] === word1[j-1]) {
        dp[i][j] = dp[i-1][j-1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]);
      }
    }
  }
  return dp[word2.length][word1.length];
};


