/*
35. Search Insert Position
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let low = 0;
  let high = nums.length;
  while(low < high) {
      let mid = Math.floor((low+high)/2);
      if (target === nums[mid]) return mid;
      if (target > nums[mid]) {
          low = mid+1;
      } else {
          high = mid;
      }
  }
  return low;
};


