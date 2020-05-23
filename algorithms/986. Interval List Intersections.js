/*
986. Interval List Intersections
*/

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
  const ans = [];
  let i = 0;
  let j = 0;
  while (i < A.length && j < B.length) {
    const lo = Math.max(A[i][0], B[j][0]);
    const hi = Math.min(A[i][1], B[j][1]);
    if (lo <= hi) ans.push([lo, hi]);
    if (A[i][1] < B[j][1]) i++;
    else j++;
  }
  return ans;
};


