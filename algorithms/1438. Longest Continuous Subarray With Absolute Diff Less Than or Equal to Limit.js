/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
  let maxs = [nums[0]];
  let mins = [nums[0]];
  let maxi = 0;
  let mini = 0;
  
  let longest = 1;
  let lo = 0;
  for (let i = 1; i < nums.length; i++) {
      while (maxs.length > maxi && nums[i] > maxs[maxs.length-1]) maxs.pop();
      while (mins.length > mini && nums[i] < mins[mins.length-1]) mins.pop();
      maxs.push(nums[i]);
      mins.push(nums[i]);
      
      while (maxs[maxi] - mins[mini] > limit) {
          if (maxs[maxi] === nums[lo]) maxi++;
          if (mins[mini] === nums[lo]) mini++;
          lo++;
      }
      
      longest = Math.max(longest, i - lo + 1);
  }
  return longest;
};


