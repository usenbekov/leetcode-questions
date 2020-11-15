/**
 * @param {number[][]} matrix
 * @return {number}
 */
/*
0 1 1 1
1 1 2 2
0 1 2 3
Total: 1x6 + 2x3 + 3 = 15

if (matrix[i][j] == 1)
    dp[i][j] = 1 + min(left, top, leftTop);

*/
var countSquares = function(matrix) {
  // return solution1(matrix);
  return solution2(matrix);
};

var solution2 = function(matrix) {
  var count = 0;
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] === 1) {
              if (i > 0 && j > 0) {
                  matrix[i][j] = 1 + Math.min(matrix[i][j-1], matrix[i-1][j], matrix[i-1][j-1]);
              }
              count += matrix[i][j];
          }
      }
  }
  return count;
}

var solution1 = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const mem = {};
  
  const countSquares = (i, j) => {
      if (i >= m || j >= n) return 0;
      if (mem[i+'x'+j] !== undefined) return mem[i+'x'+j];
      
      var countM = 0;
      var countN = 0;
      for (let k=i; k < m; k++) {
          if (matrix[k][j] !== 1) break;
          countM += 1;
      }
      for (let k=j; k < n; k++) {
          if (matrix[i][k] !== 1) break;
          countN += 1;
      }
      if (countM === 0 || countN == 0) return 0;
      const res = Math.min(countM, countN, 1+countSquares(i+1, j+1));
      mem[i+'x'+j] = res;
      return res;
  }
  
  var count = 0;
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          count += countSquares(i, j);
      }
  }
  
  return count;
}