/*
62. Unique Paths
*/

/*
Solution 1:
dp[i][j] = left + top

1  1  1  1  1  1  1
1  2  3  4  5  6  7
1  3  6 10 15 21 28


Solution 2:
We can use single level array

dp.fill(1);
dp[j] += dp[j-1];

*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  return uniquesPaths2(m, n);
};

const uniquesPaths1 = (m, n) => {
  const paths = [];
  for (let i = 0; i < n; i++) {
      paths[i] = [];
      for (let j = 0; j < m; j++) {
          if (i === 0 && j === 0) paths[i][j] = 1;
          else paths[i][j] = (paths[i][j-1] || 0) + (paths[i-1] ? paths[i-1][j] : 0);
      }
  }
  return paths[n-1][m-1];
}

const uniquesPaths2 = (m, n) => {
  const sums = new Array(m).fill(1);
  for (let i = 1; i < n; i++) {
      for (let j = 1; j < m; j++) {
          sums[j] += sums[j-1];
      }
  }
  return sums[m-1];
}





