/*
264. Ugly Number II
*/

/*
dp = [1]
i2 = 0, i3 = 0, i5 = 0
next2 = 2, next3 = 3, next5 = 5
for i in 1..n
  dp[i] = min(next2, next3, next5)
  if dp[i] == next2 -> next2 = dp[++i2] * 2
  if dp[i] == next3 -> next3 = dp[++i3] * 3
  if dp[i] == next5 -> next5 = dp[++i5] * 5
return dp.last
*/

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const dp = new Array(n);
  dp[0] = 1;
  let i2 = 0; let i3 = 0; let i5 = 0;
  let next2 = 2; let next3 = 3; let next5 = 5;
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(next2, next3, next5);
    
    if (dp[i] === next2) next2 = dp[++i2] * 2;
    if (dp[i] === next3) next3 = dp[++i3] * 3;
    if (dp[i] === next5) next5 = dp[++i5] * 5;
  }
  
  return dp[dp.length-1];
};




