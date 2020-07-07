/*
463. Island Perimeter
*/

/*
Solution 1
1. Find first land
2. DFS and count the shores

Solution 2
1. if is land than let assume we have 4 shores
2. if left is land then 4shores - (right shore of left) - (left shore of current)
3. do same with top

if (cell == 1) count += 4;
if (left_cell == 1) count -= 2;
if (top_cell == 1) count -= 2;
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  //return solution1(grid);
  return solution2(grid);
};

var solution2 = function(grid) {
  if (grid.length < 1) return 0;
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        count += 4;
        if (i > 0 && grid[i-1][j] === 1) count -= 2;
        if (j > 0 && grid[i][j-1] === 1) count -= 2;
      }
    }
  }
  return count;
}

var solution1 = function(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        return countShores(grid, i, j);
      }
    }
  }
  return 0;
}

var countShores = function(grid, i, j, visited = {}) {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return 1;
  if (grid[i][j] === 0) return 1;
  if (grid[i][j] === 2) return 0;
  grid[i][j] = 2; // visited
  
  let count = 0;
  count += countShores(grid, i-1, j);
  count += countShores(grid, i+1, j);
  count += countShores(grid, i, j-1);
  count += countShores(grid, i, j+1);
  return count;
}


