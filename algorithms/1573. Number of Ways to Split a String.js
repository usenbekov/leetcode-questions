/**
 * @param {string} s
 * @return {number}
 */
var numWays = function(s) {
  //return solution1(s)
  return solution2(s)
};

var solution1 = function(s) {
  const oneIndexes = [];
  let totalOnes = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i] == '1') {
          totalOnes++;
          oneIndexes.push(i);
      }
  }
  
  if (totalOnes % 3 !== 0) return 0;
  
  let total = 0;
  if (totalOnes === 0) {
      const dp = [1, 3, 6]
      for (let i = dp.length; i < s.length; i++) {
          dp[i] = dp[i-1] + (1 + i)
      }
      total = dp[s.length-3];
  } else {
      const onesLen = totalOnes/3;
      total = (oneIndexes[onesLen] - oneIndexes[onesLen-1])
      * (oneIndexes[onesLen*2] - oneIndexes[onesLen*2-1]);
  }
  
  return total % (Math.pow(10, 9) + 7);
}

const MOD = Math.pow(10, 9) + 7

var solution2 = function(s) {
  const oneIndexes = [];
  let totalOnes = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i] == '1') {
          totalOnes++;
          oneIndexes.push(i);
      }
  }
  
  if (totalOnes % 3 !== 0) return 0;
  if (totalOnes === 0) return (s.length - 2) * (s.length - 1) / 2 % MOD;
  
  const onesLen = totalOnes/3;
  return (oneIndexes[onesLen] - oneIndexes[onesLen-1])
  * (oneIndexes[onesLen*2] - oneIndexes[onesLen*2-1]) % MOD;
}

