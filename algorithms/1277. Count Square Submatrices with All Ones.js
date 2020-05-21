/*
1277. Count Square Submatrices with All Ones
*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i > 0 && j > 0 && matrix[i][j] > 0) {
        matrix[i][j] = 1 + Math.min(matrix[i-1][j], matrix[i-1][j-1], matrix[i][j-1]);
      }
      count += matrix[i][j];
    }
  }
  return count;
};


