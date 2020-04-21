/*
15. 3Sum

Given an array nums of n integers, are there elements a, b, c
in nums such that a + b + c = 0? Find all unique triplets
in the array which gives the sum of zero.

Note:
The solution set must not contain duplicate triplets.

Example:
Given array nums = [-1, 0, 1, 2, -1, -4],
A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => {return a-b;});
  const ans = [];
  for (let i = 0; i < nums.length-2; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue;
    let low = i+1;
    let high = nums.length-1;
    while(low < high) {
      let sum = nums[i] + nums[low] + nums[high];
      if (sum === 0) {
        ans.push([nums[i], nums[low], nums[high]]);
        low++;
        high--;
        while(low < high && nums[low] === nums[low-1]) low++;
        while(low < high && nums[high] === nums[high+1]) high--;
      }
      else if (sum < 0) low++;
      else high--;
    }
  }
  return ans;
};



