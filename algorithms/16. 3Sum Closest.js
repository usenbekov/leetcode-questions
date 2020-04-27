/*
16. 3Sum Closest

Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => { return a-b; });
  // [-4, -1, 1, 2]
  let closest = Number.MAX_VALUE;
  for (let i = 0; i < nums.length-2; i++) {
    let low = i+1;
    let high = nums.length-1;
    while (low < high) {
      let sum = nums[i] + nums[low] + nums[high];
      if (sum === target) return target;
      if (sum < target) low++;
      else high--;
      
      if (Math.abs(target-closest) > Math.abs(target-sum)) {
        closest = sum;
      }
    }
  }
  return closest;
};


