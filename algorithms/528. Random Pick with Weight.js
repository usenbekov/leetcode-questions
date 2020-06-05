/*
528. Random Pick with Weight
*/

/*
indexes    0  1  2  3
weights = [1, 2, 4, 2]
brute force: pick random from [0, 1, 1, 2, 2, 2, 2, 3, 3]

O(n) solution:
1. weights = [1, 3, 7, 9]
2. random number from 0...9
3. get the index of that number
*/

/**
 * @param {number[]} w
 */
var Solution = function(w) {
  this.totals = [w[0]];
  for (let i = 1; i < w.length; i++) {
    this.totals[i] = this.totals[i-1] + w[i];
  }
  this.range = this.totals[this.totals.length-1];
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  const ranVal = Math.random()*this.range;
  let lo = 0;
  let hi = this.totals.length-1;
  while (lo < hi) {
    let mid = Math.floor((lo + hi)/2);
    if (ranVal > this.totals[mid]) lo = mid + 1;
    else hi = mid;
  }
  return lo;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
