/*
279. Perfect Squares
*/

/*
n = 12
  1 2 3 4 5 6 7 8 9 10 11 12
1 1 2 3 4 5 6 7 8 9 10 11 12
4       1 2 3 4 2 3 4  5  3
9                 1 2  3  min(4, 3)

O(n x sqrt(n))
*/

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const squares = [];
  let i = 1;
  while (i*i <= n) {
    squares.push(i*i);
    i++;
  }
  
  const dp = new Array(n+1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  for (let i = 0; i < squares.length; i++) {
    for (let j = squares[i]; j < dp.length; j++) {
      dp[j] = Math.min(dp[j], dp[j-squares[i]]+1);
    }
  }
  
  return dp[n] === Number.MAX_VALUE ? 1 : dp[n];
};


