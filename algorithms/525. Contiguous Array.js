/*
525. Contiguous Array

Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:

Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:

Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Note: The length of the given binary array will not exceed 50,000.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  return solution2(nums);
};

// O(n) O(n)
var solution2 = (nums) => {
  const map = new Map();
  map.set(0, -1);
  let count = 0;
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    count += nums[i] === 0 ? -1 : 1;
    if (map.has(count)) {
      maxLen = Math.max(maxLen, i - map.get(count));
    } else {
      map.set(count, i);
    }
  }
  return maxLen;
}

// O(n^2) O(1) Time Limit Exceeded
var solution1 = (nums) => {
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    let zeroes = 0;
    let ones = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] === 0) zeroes++;
      else ones++;
      if (zeroes === ones) {
        maxLen = Math.max(maxLen, j-i+1);
      }
    }
  }
  return maxLen;
}



