/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  //return solution1(nums, k);
  return solution2(nums, k);
};

var solution1 = function(nums, k) {
  for (let i = 0; i < nums.length; i++) {
      let sum = 0;
      for (let j = i; j < nums.length; j++) {
          sum += nums[j];
          if (j-i > 0 && (sum === k || sum % k === 0)) {
              return true;
          }
      }
  }
  return false;
}

/*
sum[i]%k == sum[j]%k => j-i
*/
var solution2 = function(nums, k) {
  const indexByModulo = new Map();
  indexByModulo.set(0, -1);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      const modulo = k !== 0 ? sum % k : sum;
      const prevIndex = indexByModulo.get(modulo);
      
      if (prevIndex !== undefined) {
          if (i-prevIndex > 1) {
              return true;
          }
      } else {
          indexByModulo.set(modulo, i);
      }
  }
  return false;
}