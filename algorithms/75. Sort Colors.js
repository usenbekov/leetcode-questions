/*
75. Sort Colors
*/

/*
Solution 1:
[2,0,2,1,1,0]
1. Iterate and count the colors
2. Change the values of array

Solution 2:
[2,0,2,1,1,0] swapIndex0 = 0; swapIndex2 = 5;
[0,0,2,1,1,2] swapIndex0 = 2; swapIndex2 = 4;
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let lo = 0;
  let hi = nums.length-1;
  let i = 0;
  while (i <= hi) {
    if (nums[i] === 0) {
      swap(nums, i++, lo++);
    }
    else if (nums[i] === 2) {
      swap(nums, i, hi--);
    }
    else {
      i++;
    }
  }
};

var swap = function(nums, i, j) {
  if (i < 0 || j < 0) return;
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}


