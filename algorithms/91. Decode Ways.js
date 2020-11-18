/**
 * @param {string} s
 * @return {number}
 */
/*
22651
(2 2651) | (22 651)
*/
var numDecodings = function(s) {
  //return solution1(s);
  return solution2(s);
};

var isValid = function(s, i, len) {
  if (s.length < i+len) return false;
  let val = parseInt(s.substr(i, len));
  return val > 0 && val <= 26 ? val : 0;
}

var solution1 = function(s) {
  const memo = [];
  const count = (i = 0) => {
      if (memo[i] !== undefined) return memo[i];
      if (i >= s.length) return 1;
      let val = 0;
      if (isValid(s, i, 1)) {
          val += count(i+1);
          if (isValid(s, i, 2)) val += count(i+2);
      }
      memo[i] = val;
      return val;
  }
  return count();
}

var solution2 = function(s) {
  const dp = [1, isValid(s, 0, 1) ? 1 : 0];
  for (let i = 2; i < s.length+1; i++) {
      dp[i] = 0;
      if (isValid(s, i-1, 1)) dp[i] += dp[i-1];
      if (isValid(s, i-2, 2) >= 10) dp[i] += dp[i-2];
  }
  return dp[s.length];
}


