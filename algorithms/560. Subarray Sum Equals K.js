/*
560. Subarray Sum Equals K

Given an array of integers and an integer k,
you need to find the total number of continuous
subarrays whose sum equals to k.

Example 1:

Input:nums = [1,1,1], k = 2
Output: 2
Note:

The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000]
and the range of the integer k is [-1e7, 1e7].
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  return subarraySum2(nums, k);
};

// O(n),O(n)
const subarraySum2 = (nums, k) => {
  const sums = new Map();
  sums.set(0, 1);
  let total = 0;
  let sum = 0;
  for (const num of nums) {
      sum += num;
      if (sums.has(sum-k)) {
          total += sums.get(sum-k);
      }
      sums.set(sum, (sums.get(sum) || 0) + 1);
  }
  return total;
}

// O(n^2)
const subarraySum1 = (nums, k) => {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
      let sum = 0;
      for (let j = i; j < nums.length; j++) {
          sum += nums[j];
          if (sum === k) {
              total++;
          }
      }
  }
  return total;
}


