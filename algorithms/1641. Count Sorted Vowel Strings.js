/**
 * @param {number} n
 * @return {number}
 */
/*
  a  e  i  o  u
1 1  2  3  4  5
2 1  3  6  10 15
*/
var countVowelStrings = function(n) {
  return solution1(n);
  //return solution2(n);
};

var solution1 = function(n) {
  const dp = [1];
  for (let i = 0; i < n; i++) {
      for (let j = 1; j < 5; j++) {
          if (i === 0) dp[j] = j+1;
          else dp[j] += dp[j-1];
      }
  }
  return dp[4];
}

var solution2 = function(n, from = 0) {
  if (n == 0) return 1;
  let count = 0;
  for (let i = from; i < 5; i++) {
      count += solution2(n-1, i);
  }
  return count;
}


