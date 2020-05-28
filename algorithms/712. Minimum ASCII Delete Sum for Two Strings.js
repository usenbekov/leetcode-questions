/*
712. Minimum ASCII Delete Sum for Two Strings
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
/*
s:1 e:2 a:3 t:4
  # s e a (s2)
# 0 1 3 9
e 2 3 1 4
a 5 6 4 1
t 9 10 8 5
(s1)
*/
var minimumDeleteSum = function(s1, s2) {
  const dp = [];
  for (let i = 0; i < s1.length+1; i++) {
    if (i === 0) dp.push([0]);
    else dp.push([dp[i-1][0] + s1.charCodeAt(i-1)]);
    for (let j = 1; j < s2.length+1; j++) {
      if (i === 0) dp[i][j] = dp[i][j-1] + s2.charCodeAt(j-1);
      else if (s1[i-1] === s2[j-1]) {
        dp[i][j] = dp[i-1][j-1];
      } else {
        dp[i][j] = Math.min(
          dp[i][j-1] + s2.charCodeAt(j-1),
          dp[i-1][j] + s1.charCodeAt(i-1)
        );
      }
    }
  }
  return dp[s1.length][s2.length];
};


