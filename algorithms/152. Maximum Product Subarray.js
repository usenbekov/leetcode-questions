/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  //return solution1(nums);
  return solution2(nums);
};

const solution1 = function(nums) {
  if (nums.length < 1) return 0;
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
      let val = 1;
      for (let j = i; j < nums.length; j++) {
          val *= nums[j];
          max = Math.max(max, val);
      }
  }
  return max;
}

const solution2 = function(nums) {
  if (nums.length < 1) return 0;
  let res = nums[0];
  let min = res;
  let max = res;
  for (let i = 1; i < nums.length; i++) {
      const _min = Math.min(nums[i], min*nums[i], max*nums[i]);
      max = Math.max(nums[i], min*nums[i], max*nums[i]);
      min = _min;
      res = Math.max(res, max);
  }
  return res;
}

