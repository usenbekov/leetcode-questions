/*
221. Maximal Square

Given a 2D binary matrix filled with 0's and 1's,
find the largest square containing only 1's and
return its area.

Example:

Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  return solution4(matrix);
};

// O(mn)2 O(mn)  ?
const solution1 = (matrix) => {
  const biggestSquareFrom = (i, j) => {
      if (matrix[i][j] == "0") return 0;
      let len = Math.min(matrix.length-i, matrix[i].length-j);
      let k = 1;
      for (k; k < len; k++) {
          for (let l = 0; l < k+1; l++) {
              if (matrix[i+k][j+l] == "0" || matrix[i+l][j+k] == "0") {
                  return k;
              }
          }
      }
      return k;
  }
  
  let width = 0;
  for (let i = 0; i < matrix.length; i++) {
      let row = matrix[i];
      for (let j = 0; j < row.length; j++) {
          let w = biggestSquareFrom(i, j);
          if (w > width) width = w;
      }
  }
  
  return width*width;
}

// O(mn) O(mn)
const solution2 = (matrix) => {
  if (matrix.length < 1) return 0;
  let maxw = 0;
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
      if (arr.length <= i) arr.push([]);
      for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] == '1') {
              let val = i == 0 || j == 0 ? matrix[i][j] : Math.min(
                  arr[i-1][j], 
                  arr[i-1][j-1], 
                  arr[i][j-1]
              ) + 1;
              arr[i][j] = val;
              if (val > maxw) maxw = val;
          } else {
              arr[i][j] = 0;
          }
      }
  }
  return maxw*maxw;
}

// O(mn) O(n)
const solution3 = (matrix) => {
  if (matrix.length < 1) return 0;
  let maxw = 0;
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
      let prev = 0;
      for (let j = 0; j < matrix[i].length; j++) {
          let val = 0;
          if (matrix[i][j] == '1') {
              val = i == 0 || j == 0 ? matrix[i][j] : Math.min(
                  arr[j], 
                  arr[j-1], 
                  prev,
              ) + 1;
              if (val > maxw) maxw = val;
          } else {
              val = 0;
          }
          
          if (j > 0) arr[j-1] = prev;
          prev = val;
          if (j === matrix[i].length-1) arr[j] = val;
      }
  }
  return maxw*maxw;
}

// O(mn) O(1)
const solution4 = (matrix) => {
  if (matrix.length < 1) return 0;
  let maxw = 0;
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] == '1') {
              matrix[i][j] = i===0 || j===0 ? matrix[i][j] : (1 + Math.min(
                  matrix[i-1][j],
                  matrix[i-1][j-1],
                  matrix[i][j-1],
              ));
              
              if (matrix[i][j] > maxw) maxw = matrix[i][j]; 
          }
      }
  }
  
  return maxw*maxw;
}





