/*
540. Single Element in a Sorted Array
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let low = 0;
  let high = nums.length-1;
  while (low < high) {
    const mid = Math.floor((low+high)/2);
    const midEven = mid % 2 === 0;
    if (nums[mid] === nums[mid-1]) {
      if (midEven) high = mid-2;
      else low = mid+1;
    }
    else if (nums[mid] === nums[mid+1]) {
      if (midEven) low = mid+2;
      else high = mid-1;
    }
    else return nums[mid];
  }
  return nums[low];
};


