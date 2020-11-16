/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, K) {
  const m = mat.length;
  const n = mat[0].length;
  const sum = [[]];
  const sumOf = (i, j) => {
      if (i < 0 || j < 0 || i >= sum.length || j >= sum[i].length) return 0;
      return sum[i][j] || 0;
  }
  for (let i = 0; i < m; i++) {
      sum.push([]);
      for (let j = 0; j < n; j++) {
          sum[i+1][j+1] = sumOf(i, j+1) + sumOf(i+1, j) - sumOf(i, j) + mat[i][j];
      }
  }
  
  const res = [];
  for (let i = 0; i < m; i++) {
      res.push([]);
      for (let j = 0; j < n; j++) {
          const r1 = Math.max(0, i-K);
          const c1 = Math.max(0, j-K);
          const r2 = Math.min(m, i+K+1);
          const c2 = Math.min(n, j+K+1);
          res[i][j] = sumOf(r2, c2) - sumOf(r2, c1) - sumOf(r1, c2) + sumOf(r1, c1);
      }
  }
  
  return res;
};

