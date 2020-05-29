/*
516. Longest Palindromic Subsequence
*/

/**
 * @param {string} s
 * @return {number}
 */
/*
abca 3
  a b c a
a 1 1 1 1
c 1 1 2 2
b 1 2 2 2
a 1 2 2 3

abba 4
  a b b a
a 1 1 1 1
b 1 2 2 2
b 1 1 3 3
a 1 1 3 4

abbcdea 4
  a b b c d e a
a 1 1 1 1 1 1 1
e 1 1 1 1 1 2 2
d 1 1 1 1 2 2 2
c 1 1 1 2 2 2 2
b 1 2 2 2 2 2 2
b 1 2 3 3 3 3 3
a 1 2 3 3 3 3 4
*/
var longestPalindromeSubseq = function(s) {
  const dp = [];
  for (let i = 0; i < s.length+1; i++) {
    dp[i] = [0];
    for (let j = 1; j < s.length+1; j++) {
      if (i === 0) dp[i].push(0);
      else if (s[i-1] === s[s.length-j]) {
        dp[i][j] = 1 + dp[i-1][j-1];
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
      }
    }
  }
  return dp[s.length][s.length];
};


