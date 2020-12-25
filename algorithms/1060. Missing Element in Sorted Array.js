/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
  //return solution1(nums, k);
  return solution2(nums, k);
};

var solution1 = function(nums, k) {
  if (k < 1) k = 1;
  for (let i = 1; i < nums.length; i++) {
      const dif = nums[i]-nums[i-1]-1;
      if (dif >= k) return nums[i-1] + k;
      k -= dif
  }
  return nums[nums.length-1] + k;
}

/*
[4,7,9,10]
 |
7-4-1(index) = 2

[4,7,9,10]
   |
9-4-2(index) = 3
*/

var solution2 = function(nums, k) {
  const getMissedCount = (index) => {
      if (index < 1) return 0;
      return nums[index] - nums[0] - index;
  }
  
  if (k < 1) k = 1;
  nums.push(nums[nums.length-1] + k)
  
  let lo = 0;
  let hi = nums.length-1;
  while (lo < hi) {
      const mid = lo + Math.floor((hi-lo)/2)
      const missedCount = getMissedCount(mid);
      if (missedCount < k) lo = mid + 1;
      else hi = mid;
  }
  
  return nums[lo] + k - getMissedCount(lo) - 1;
}


