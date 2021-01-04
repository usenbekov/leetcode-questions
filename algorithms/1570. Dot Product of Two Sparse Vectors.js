/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
  this.nums = nums;
  this.indxs = [];
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) this.indxs.push(i);
  }
};

// Return the dotProduct of two sparse vectors
/**
* @param {SparseVector} vec
* @return {number}
*/
SparseVector.prototype.dotProduct = function(vec) {
  const indxs = vec.indxs.length < this.indxs.length ? vec.indxs : this.indxs;
  let val = 0;
  for (let i = 0; i < indxs.length; i++) {
      val += vec.nums[indxs[i]] * this.nums[indxs[i]];
  }
  return val;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);

