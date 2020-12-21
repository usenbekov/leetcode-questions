/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  //return solution1(cardPoints, k);
  return solution2(cardPoints, k);
};

var solution1 = function(points, k, i, j) {
  if (i === undefined) i = 0;
  if (j === undefined) j = points.length-1;
  if (k <= 0 || i > j) return 0;
  let left = points[i] + solution1(points, k-1, i+1, j)
  let right = points[j] + solution1(points, k-1, i, j-1)
  return Math.max(left, right);
}

// sliding window
var solution2 = function(points, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
      sum += points[i] || 0;
  }
  
  let max = sum;
  const len = points.length - k;
  for (let i = k-1; i >= 0; i--) {
      sum -= points[i];
      sum += points[i+len];
      max = Math.max(max, sum);
  }
  
  return max;
}

