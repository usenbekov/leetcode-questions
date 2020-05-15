/*
918. Maximum Sum Circular Subarray
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
  /*
  [1, -2, 3] -> L = [1], M = [-2], R = [3]
  total = l + m + r;
  lr = total - m;
  To find M we can inverse and search max
  */
  let max = A[0];
  let maxM = -A[0];
  let prev = max;
  let prevM = maxM;
  let total = A[0];
  for (let i = 1; i < A.length; i++) {
    prev = Math.max(prev+A[i], A[i]);
    max = Math.max(max, prev);
    
    prevM = Math.max(prevM-A[i], -A[i]);
    maxM = Math.max(maxM, prevM);
    
    total += A[i];
  }
  if (total === -maxM) return max; // if no M
  return Math.max(max, total+maxM);
};


