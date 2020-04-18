/*
64. Minimum Path Sum

Given a m x n grid filled with non-negative numbers,
find a path from top left to bottom right which minimizes
the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (grid.length < 1 || grid[0].length < 1) return 0;
  return Math.max(0, getPathSum(grid, 0, 0));
};

// O(m x n) O (m x n)
var getPathSum = function(grid, i, j, dp) {
  if (i >= grid.length || j >= grid[0].length) {
    return Number.MAX_VALUE;
  }
  if (i === grid.length-1 && j === grid[0].length-1) {
    return grid[i][j];
  }
  if (!dp) dp = [];
  if (!dp[i]) dp[i] = [];
  if (dp[i][j] !== undefined) return dp[i][j];
  
  const val = grid[i][j] + Math.min(
    getPathSum(grid, i+1, j, dp),
    getPathSum(grid, i, j+1, dp)
  );
  dp[i][j] = val;
  return val;
}


