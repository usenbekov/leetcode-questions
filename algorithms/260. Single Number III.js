/*
260. Single Number III
*/

/*
1. xor all numbers
2. find the low bit (n & -n)
3. seperate into two groups with (lowbit & num)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let xored = 0;
  for (const num of nums) xored = xored ^ num;
  
  const lowbit = xored & (-xored);
  const res = [0, 0];
  for (const num of nums) {
    const i = num & lowbit ? 0 : 1;
    res[i] = res[i] ^ num;
  }
  return res;
};


